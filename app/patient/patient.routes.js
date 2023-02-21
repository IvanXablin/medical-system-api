import express from "express";
import { patientController } from "./patient.controller.js";

const router = express.Router();

router.route('/register').post(patientController);

export default router;