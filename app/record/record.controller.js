import { createRecord } from "./record.service.js";

// @desc create record
// @route POST /api/record/create
export const create = async (request, response) => {
    response.json(createRecord(request.body));
};