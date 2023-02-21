import { createRecord } from "./record.service.js";
import asyncHandler from "express-async-handler";

// @route POST /api/record/create
export const recordController = asyncHandler(async (request, response) => {
    const responseService = await createRecord(request.body);
    response.json(responseService);
})