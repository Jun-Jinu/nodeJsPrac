const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopnRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopnRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>여긴 존재하지않는 페이지입니다!!!@@</h1>");
});

app.listen(3000);
