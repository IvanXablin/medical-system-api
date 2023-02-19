import express from "express";
import { create } from "./record.controller.js";

const router = express.Router();

router.route('/create').post(create);

export default router;