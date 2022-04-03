import { query, generateFilterCondition } from "../helpers"
export class ThingModel implements DbModel<Thing> {
    table: string;

    constructor() {
        this.table = "thing";
    }

    getAll = async () => {
        const sql = {
            query: "select * from ?;",
            data: [this.table],
        };
        const returnedThings = await query(sql).catch((e) => console.error(e));
        return returnedThings as Thing[];
    };

    getFromFilter = async (filters: Filter[]) => {
        const acceptableFilters = ["id"]
        const filterCondition = generateFilterCondition(acceptableFilters, filters)
        const sql = {
            query: filterCondition.condition.length > 0 ? `select * from ? where ${filterCondition.condition};` : "select * from ?;",
            data: [].concat(filterCondition.filterData)
        };

        const returnedthing = await query(sql).catch(e => console.error(e));
        return returnedthing as Thing[];
    };
}
