import { query, generateFilterCondition } from "../helpers"

export const getAllThings = async () => {
    const queryObject = {
        query: "select * from ?;",
        data: ["things"],
    };
    const returnedThings = await query(queryObject).catch((e) => console.error(e));
    return returnedThings as Thing[];
};

export const getThingsFromFilter = async (filters: Filter[]) => {
    const acceptableFilters = ["id"]
    const filterCondition = generateFilterCondition(acceptableFilters, filters)
    const queryObject = {
        query: filterCondition.condition.length > 0 ? `select * from ? where ${filterCondition.condition};` : "select * from ?;",
        data: ["things"].concat(filterCondition.filterData)
    };

    const returnedthing = await query(queryObject).catch(e => console.error(e));
    return returnedthing as Thing[];
};


