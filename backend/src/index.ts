const cors = require("cors");
const express = require("express");
const app = express();

import { v1Router } from "./routes"

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", v1Router)

app.listen(7676, () => {
    console.log(`server started on port ${7676}`);
});
