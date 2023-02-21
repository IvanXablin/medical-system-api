import { getInfoSchedule } from "./schedule.service.js";
import asyncHandler from "express-async-handler";

// @route GET /api/schedule/info
export const scheduleController = asyncHandler(async (request, response) => {
    const responseService = await getInfoSchedule(request.query)
    response.json(responseService);
});