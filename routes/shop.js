const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>안녕 자바스크립트!</h1>");
});

module.exports = router;
