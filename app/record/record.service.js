import { prisma } from "../prisma.js";

export const createRecord = async (body) => {
    const { id, patientId, doctorId, scheduleId } = body;

    const dataRecord = {
        id: id,
        patientId: patientId,
        doctorId: doctorId,
        scheduleId : patientId,
    };

    const newRecord = await prisma.record.create({
        data: dataRecord
    });

    return newRecord;
};