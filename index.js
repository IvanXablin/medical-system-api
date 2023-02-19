import express from "express";
import dotenv from "dotenv";
import patientRoutes from "./app/patient/patient.routes.js";
import recordRoutes from "./app/record/record.routes.js";
import { prisma } from "./app/prisma.js";

const app = express();

dotenv.config();

const main = async () => {
    app.use(express.json());
    app.use('/api/patient', patientRoutes);
    app.use('/api/record', recordRoutes);
    app.listen(3000);
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        await prisma.$disconnect();
        process.exit(1);
    });