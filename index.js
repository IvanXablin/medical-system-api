import express from "express";
import patientRoutes from "./app/patient/patient.routes.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const main = () => {
    app.use(express.json());
    app.use('/api/patient', patientRoutes);
    app.listen(3000);
};

main();