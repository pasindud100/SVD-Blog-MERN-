const express = require("express");
const router = express.Router();
const test = require("../Controllers/UserController").test;


router.get("/test", test);

module.exports = router;
