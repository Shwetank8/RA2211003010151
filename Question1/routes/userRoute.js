const express = require("express");
const { getTopUsers } = require("../controller/userController");

const router = express.Router();
router.get("/users", getTopUsers);

module.exports = router;
