import mysql, { QueryError } from "mysql2";
require("dotenv").config();
const host = process.env.DBHOST;

const query = ({
    username,
    password,
    db,
    query,
    data,
}: QueryParams): Promise<unknown[]> => {
    return new Promise((resolve, reject) => {
        if (username && password && db && query && data) {
            let con = mysql.createConnection({
                host: host,
                user: username,
                password: password,
                database: db,
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

export default query;
