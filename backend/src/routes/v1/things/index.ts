const express = require("express"), router = express.Router();
import { thingsGET } from "../../../controllers";

router.get("/", thingsGET)

router.get("/:id", (req, res) => {
    res.send('UNIMPLEMENTED: get one things').status(200)
})

router.post("/", (req, res) => {
    res.send('UNIMPLEMENTED: insert new thing').status(200)
})

router.put("/:id", (req, res) => {
    res.send('UNIMPLEMENTED: update a thing').status(200)
})

router.delete("/:id", (req, res) => {
    res.send('UNIMPLEMENTED: delete a thing').status(200)
})

export { router as thingsRouter }
