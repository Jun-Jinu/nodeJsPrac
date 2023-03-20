const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopnRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopnRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

app.listen(3000);
