const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
    res.send("Bob");
});

app.listen(7676, () => {
    console.log(`server started on port ${7676}`);
});
