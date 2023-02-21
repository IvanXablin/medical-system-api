import express from "express";
import dotenv from "dotenv";
import patientRoutes from "./app/patient/patient.routes.js";
import recordRoutes from "./app/record/record.routes.js";
import { prisma } from "./app/prisma.js";
import scheduleRoutes from "./app/schedule/schedule.routes.js";
import { errorHandler, notFound } from "./app/middleware/error.middleware.js";
import { mailService } from "./app/mailService.js";
import cron from "node-cron";

const app = express();

dotenv.config();

const PORT = process.env.PORT | 3000;

const main = async () => {
    app.use(express.json());

    app.use('/api/patient', patientRoutes);
    app.use('/api/record', recordRoutes);
    app.use('/api/schedule', scheduleRoutes);

    app.use(notFound);
    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server listen port: ${ PORT }`);

        cron.schedule("* * * * * *", async () => {
            await mailService();
        });
    });
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        await prisma.$disconnect();
        process.exit(1);
    });