const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
    res.send("<h1>안녕하세요!!!@@</h1>");
});

app.listen(3000);
