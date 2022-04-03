import mysql, { QueryError } from "mysql2";
import { databaseName } from "../constants"
require("dotenv").config();
const host = process.env.DBHOST;

export const query = ({
    query,
    data,
}: QueryParams): Promise<unknown[]> => {
    return new Promise((resolve, reject) => {
        if (query && data) {
            let con = mysql.createConnection({
                host: host,
                user: process.env.USERNAME,
                password: process.env.PASSWORD,
                database: databaseName
            });
            con.connect((err: QueryError) => {
                if (err) {
                    con.destroy();
                    return reject(err);
                }
                con.query(query, data, (err: QueryError, result: any[]) => {
                    if (err) {
                        con.destroy();
                        return reject(err);
                    } else {
                        con.destroy();
                        return resolve(result);
                    }
                });
            });
        } else {
            return reject("Not all information for the query was sent");
        }
    });
};
