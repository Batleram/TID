const express = require("express"), router = express.Router();

router.get("/", (req, res) => {
    res.send('UNIMPLEMENTED: get all things').status(200)
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
