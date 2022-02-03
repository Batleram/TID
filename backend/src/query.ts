require("custom-env").env("jeraya", process.cwd() + "/env/");
import "./types.d.ts";
import mysql from "mysql";
const host = process.env.DBHOST;

const query = ({ username, password, db, query, data }: queryParams) => {
    return new Promise((resolve, reject) => {
        if (username && password && db && query && data) {
            let con = mysql.createConnection({
                host: host,
                user: username,
                password: password,
                database: db,
            });
            con.connect((err: any) => {
                if (err) {
                    con.destroy();
                    return reject(err);
                }
                con.query(query, data, (err: any, result: any) => {
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
            return reject("Not all information for the query was send");
        }
    });
};

export default query;
