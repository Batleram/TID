import { thingsRouter } from "./things"
import { usersRouter } from "./users"

const express = require("express"), router = express.Router();
router.use("/things", thingsRouter)
router.use("/users", usersRouter)

export { router as v1Router }
