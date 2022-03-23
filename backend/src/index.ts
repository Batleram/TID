const cors = require("cors");
const express = require("express");
const app = express();
import { ThingService as ts, AuthService as as } from "./dbservices";
import { JWTWrapper } from "./JWTWrapper";
const thingService = new ts();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/getthings", async (req: any, res: any) => {
//     const things: Thing[] = await thingService.getAll();
//     res.json(things);
// });

app.post("/login", async (req: any, res: any) => {
    // const loginData: { username: string, password: string } = req.body
    // const AuthService = new as();
    // const users = await AuthService.getFromFilter([{ type: "username", value: loginData.username, func: "eq" }])
    // if (users.length == 0) {
    //     return res.sendStatus(403)
    // }
    const users = [{ username: "balls" }]

    const newToken = new JWTWrapper({ username: users[0].username }, "ball")
    await newToken.sign()
    res.cookie('token', newToken.token, { httpOnly: true, maxAge: 24 * 60 * 60 })
    res.send(newToken.token)
})

app.get("/logout", (req: any, res: any) => {
    res.clearCookie("token").send(200)
})

app.listen(7676, () => {
    console.log(`server started on port ${7676}`);
});
