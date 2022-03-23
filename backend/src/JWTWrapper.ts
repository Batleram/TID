import jwt, { JsonWebTokenError, VerifyOptions, Jwt } from "jsonwebtoken";
require("dotenv").config()

export class JWTWrapper {
    private privKey: string;
    token: string;
    options: any;
    payload: any;
    decoded: Jwt;

    constructor(_payload = {}, _privateKey = process.env.JWTPRIVATEKEY, _options = {}, _token = "") {
        this.options = _options;
        this.privKey = _privateKey;
        this.payload = _payload;
        this.token = _token;
    }


    decode(_options: VerifyOptions = { complete: true }) {
        return new Promise((resolve, reject) => {

            if (!this.token || this.token == "")
                reject([null, "Missing token"])

            jwt.verify(this.token, this.privKey, _options, (err: JsonWebTokenError, decoded: Jwt | undefined) => {
                if (err)
                    reject([null, err])
                this.decoded = decoded;
                resolve([decoded, null])
            })
        })
    }

    async sign() {
        return new Promise((resolve, reject) => {

            jwt.sign(this.payload, this.privKey, this.options, (err, token) => {
                if (err)
                    reject([null, err])
                this.token = token;
                return resolve([token, null])
            })
        })
    }
}
