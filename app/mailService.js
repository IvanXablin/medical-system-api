import nodemailer from "nodemailer";
import moment from "moment/moment.js";
import { prisma } from "./prisma.js";
export const mailService = async () => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const schedules = await prisma.schedule.findMany();

    await Promise.all(schedules.map(async ( schedule) => {
         const patient = await prisma.patient.findUnique({
             where: {
                 id: schedule.patientId
             }
         });

        const doctor = await prisma.doctor.findUnique({
            where: {
                id: schedule.doctorId
            }
        });

        const timeBegin = moment(schedule.timeFrom).utc(false);
        const dateNow = moment().utc(true);

        if (timeBegin.diff(dateNow, 'milliseconds') === 7200000 && !schedule.isSendMailHour) {
            await transporter.sendMail({
                from: '"Node js" <kennedy.hammes@ethereal.email>',
                to: patient.email,
                subject: `Уведомление для пациента ${patient.name}`,
                text: `${schedule.date} | Привет ${patient.name} ! Через 2 часа у вас приём у ${doctor.name} c ${schedule.timeFrom} до ${schedule.timeTo}!`,
            });

            await prisma.schedule.update({
                where: {
                    id: schedule.id
                },
                data: {
                    isSendMailHour: true
                }
            });
        }

        if (timeBegin.diff(dateNow, 'milliseconds') === 86400000 && !schedule.isSendMailHour) {
            console.log('sas')
            await transporter.sendMail({
                from: '"Node js" <kennedy.hammes@ethereal.email>',
                to: patient.email,
                subject: `Уведомление для пациента ${patient.name}`,
                text: `${schedule.date} | Привет ${patient.name}! Напоминаем что вы записаны к ${doctor.spec} завтра в ${schedule.timeFrom}!`,
            });

            await prisma.schedule.update({
                where: {
                    patientId: patient.id
                },
                data: {
                    isSendMailDay: true
                }
            });
        }
    }));
};








