import { prisma } from "../prisma.js";
import moment from "moment";

export const createRecord = async (body) => {
    const { id, patientId, doctorId, scheduleId } = body;

    const error = await validateRecord(id, patientId, scheduleId);

    if (error.isError) {
        return error.message;
    }

    const newRecord = {
        id: id,
        patientId: patientId,
        doctorId: doctorId,
        scheduleId : scheduleId,
    };

    return prisma.record.create({
        data: newRecord
    });
};

const validateRecord = async (id, patientId, scheduleId) => {
    const oldRecord = await prisma.record.findUnique({
        where: {
            id: id,
        }
    });

    if (oldRecord) {
        return {
            isError: true,
            message: 'Запись уже существует!'
        };
    }

    const oldSchedule = await prisma.schedule.findUnique({
        where: {
            id: scheduleId,
        }
    });

    if (!oldSchedule) {
        return {
            isError: true,
            message: 'Слот не существует!'
        }
    }

    if (!oldSchedule.isFree) {
        return {
            isError: true,
            message: 'Текущий слот занят!'
        }
    }

   // const timeSchedule = moment(oldSchedule.timeTo).utc().format('DD-MM-YYYY HH:mm:ss');
   // const dateNow = moment().utcOffset('+0700').format('DD-MM-YYYY HH:mm:ss');

    const timeSchedule = moment(oldSchedule.timeFrom).utc(false).unix();
    const dateNow = moment().utc(true).unix();

    if (oldSchedule.id === scheduleId && oldSchedule.patientId !== patientId) {
        return {
            isError: true,
            message: 'На один слот может записаться только один человек!'
        }
    }

    if (dateNow > timeSchedule) {
        return {
            isError: true,
            message: 'Время слота истекло!'
        }
    }

    return {
        isError: false,
        message: ''
    };
};