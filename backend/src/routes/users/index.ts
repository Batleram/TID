const express = require("express"), router = express.Router();

router.get("/", (req, res) => {
    res.send('UNIMPLEMENTED: get all users').status(200)
})

router.post("/", (req, res) => {
    res.send('UNIMPLEMENTED: insert new user').status(200)
})

router.put("/:id", (req, res) => {
    res.send('UNIMPLEMENTED: update a user').status(200)
})

router.delete("/:id", (req, res) => {
    res.send('UNIMPLEMENTED: delete a user').status(200)
})

export { router as usersRouter }
