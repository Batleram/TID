const cors = require("cors");
const express = require("express");
const app = express();

import { thingsRouter, usersRouter } from "./routes"

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/things", thingsRouter)
app.use("/users", usersRouter)



app.listen(7676, () => {
    console.log(`server started on port ${7676}`);
});
