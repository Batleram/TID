import query from "./query";
require("dotenv").config();

export class thingService implements dbService<thing> {
    table: string;

    constructor() {
        this.table = "thing";
    }

    getAll = async () => {
        const sql = {
            username: process.env.DBUSER,
            password: process.env.DBPASS,
            db: process.env.DB,
            query: "select * from things;",
            data: [],
        };
        const returnedThing = await query(sql).catch((e) => console.error(e));
        return returnedThing as thing[];
    };

    getFromFilter = (f) => {
        return [{} as thing];
    };
}
