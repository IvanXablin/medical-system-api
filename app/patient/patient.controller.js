import { registerPatient } from "./patient.service.js";

// @desc Register patient
// @route POST /api/patient/register
export const register = async (request, response) => {
    response.json(registerPatient(request.body));
};