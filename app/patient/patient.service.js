import { prisma } from "../prisma.js";

export const registerPatient = async (body) => {

    const { id, phone, name, email, gender } = body;

    const oldPatient = await prisma.patient.findMany({
        where: {
          id: id
        }
    });

    if (oldPatient.length) {
        return { message: 'Пациент существует в системе!', statusCode: 409 };
    }

    const newPatient = {
        id: id,
        phone: phone,
        name: name,
        email: email,
        gender: gender
    };

    const patientData = await prisma.patient.create({
        data: newPatient
    });

    return {
        data: patientData,
        statusCode: 200
    }
};