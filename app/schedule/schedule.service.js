import { prisma } from "../prisma.js";
import moment from "moment";

export const getInfoSchedule = async (params) => {
    const { date } = params;

    const dateQuery = moment(date).utc(true).toISOString();

    return prisma.schedule.findMany({
        where: {
           date: dateQuery
        }
    })
};