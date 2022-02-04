const cors = require("cors");
const express = require("express");
const app = express();
import { thingService as ts } from "./dbservices";
const thingService = new ts();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/getthings", async (req: any, res: any) => {
    let things: thing[] = await thingService.getAll();
    res.json(things);
});

app.listen(7676, () => {
    console.log(`server started on port ${7676}`);
});
