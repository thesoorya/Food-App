const express = require("express")
const { getUsers, getUser, deleteUser } = require("../controller/userController")
const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)

module.exports = router