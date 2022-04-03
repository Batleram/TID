import { generateFilterCondition, query } from "../helpers"
export class UserModel implements DbModel<User>{
    table: string;

    constructor() {
        this.table = "usres";
    }
    getAll = async () => {
        const sql = {
            query: "select * from ?;",
            data: [this.table],
        };
        const returnedThing = await query(sql).catch((e) => console.error(e));
        return returnedThing as User[];
    }
    getFromFilter = async (filters: Filter[]) => {
        const acceptableFilters = ["id", "username", "email"]
        const filterCondition = generateFilterCondition(acceptableFilters, filters)


        const sql = {
            query: filterCondition.condition.length > 0 ? `select * from ? where ${filterCondition.condition};` : "select * from ?;",
            data: [].concat(filterCondition.filterData)
        };

        const returnedthing = await query(sql).catch(e => console.error(e));
        return returnedthing as User[];
    }
}
