import { generateFilterCondition, query } from "../helpers"

export const getAllUsers = async () => {
    const queryObject = {
        query: "select * from ?;",
        data: ["users"],
    };
    const returnedThing = await query(queryObject).catch((e) => console.error(e));
    return returnedThing as User[];
}


export const getUsersFromFilter = async (filters: Filter[]) => {
    const acceptableFilters = ["id", "username", "email"]
    const filterCondition = generateFilterCondition(acceptableFilters, filters)

    const queryObject = {
        query: filterCondition.condition.length > 0 ? `select * from ? where ${filterCondition.condition};` : "select * from ?;",
        data: ["users"].concat(filterCondition.filterData)
    };

    const returnedthing = await query(queryObject).catch(e => console.error(e));
    return returnedthing as User[];
}

