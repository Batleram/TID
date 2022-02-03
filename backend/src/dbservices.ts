import query from "./query";
import "./types.d.ts";

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
            query: "",
            data: [],
        };
        const returnedThing = await query(sql).catch((e) => console.error(e));
        return this.castToType(returnedThing);
    };

    getFromFilter = (f) => {
        return [{} as thing];
    };

    castToType = (ut: unknown) => {
        return ut as thing;
    };
}
