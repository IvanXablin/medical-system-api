import { registerPatient } from "./patient.service.js";
import asyncHandler from "express-async-handler";

// @route POST /api/patient/register
export const patientController = asyncHandler(async (request, response) => {
    const responseService = await registerPatient(request.body);

    if (responseService.statusCode === 409) {
        response.status(responseService.statusCode);
        response.json(responseService.message);
    }
    else {
        response.status(responseService.statusCode);
        response.json(responseService.data);
    }
});




