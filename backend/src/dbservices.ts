import query from "./query";
require("dotenv").config();

export class ThingService implements DbService<Thing> {
    table: string;

    constructor() {
        this.table = "thing";
    }

    getAll = async () => {
        const sql = {
            username: process.env.DBUSER,
            password: process.env.DBPASS,
            db: process.env.DB,
            query: "select * from ?;",
            data: [this.table],
        };
        const returnedThings = await query(sql).catch((e) => console.error(e));
        return returnedThings as Thing[];
    };

    getFromFilter = async (filters: Filter[]) => {
        const acceptableFilters = ["id"]
        const queryData = processFilters(this.table, acceptableFilters, filters)
        const sql = {
            username: process.env.DBUSER,
            password: process.env.DBPASS,
            db: process.env.DB,
            query: queryData[0],
            data: queryData[1]
        };

        const returnedthing = await query(sql).catch(e => console.error(e));
        return returnedthing as Thing[];
    };
}

export class AuthService implements DbService<User>{
    table: string;

    constructor() {
        this.table = "usres";
    }
    getAll = async () => {
        const sql = {
            username: process.env.DBUSER,
            password: process.env.DBPASS,
            db: process.env.DB,
            query: "select * from ?;",
            data: [this.table],
        };
        const returnedThing = await query(sql).catch((e) => console.error(e));
        return returnedThing as User[];
    }
    getFromFilter = async (filters: Filter[]) => {
        const acceptableFilters = ["id", "username", "email"]
        const queryData = processFilters(this.table, acceptableFilters, filters)
        const sql = {
            username: process.env.DBUSER,
            password: process.env.DBPASS,
            db: process.env.DB,
            query: queryData[0],
            data: queryData[1]
        };

        const returnedthing = await query(sql).catch(e => console.error(e));
        return returnedthing as User[];
    }
}

const processFilters = (tableName: string, acceptableFilters: string[], filters: Filter[]): [string, string[]] => {
    const filterSections: string[] = [];
    const filterData: string[] = [];
    filters.forEach((f: Filter) => {
        if (!acceptableFilters.includes(f.type)) return
        filterSections.push(`? ${processFilterFunc(f.func)} ?`)
        filterData.push(f.type)
        filterData.push(f.value)
    })

    const queryStart = "select * from ?"
    const sqlQuery = filterSections.length > 0 ? queryStart + " where " + filterSections.join(" and ") + ";" : queryStart + ";"

    return [sqlQuery, [tableName].concat(filterData)]
}

const processFilterFunc = (f: string) => {
    switch (f) {
        case "neq":
            return "!="
        case "eq":
            return "="
        case "st":
            return "<"
        case "steq":
            return "<="
        case "gt":
            return ">"
        case "gteq":
            return ">="
        default:
            return "="
    }
}
