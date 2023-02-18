// @desc Register patient
// @route POST /api/patient/register

export const registerPatient = async (request, response) => {
    response.json({ message: 'Пациент зарегистрирован!' });
};