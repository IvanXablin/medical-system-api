import express from "express";
import { recordController } from "./record.controller.js";

const router = express.Router();

router.route('/create').post(recordController);

export default router;