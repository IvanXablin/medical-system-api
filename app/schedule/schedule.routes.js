import express from "express";
import { scheduleController } from "./schedule.controller.js";

const router = express.Router();

router.route('/info').get(scheduleController);

export default router;