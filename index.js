const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use("/users", require("./routes/users-routes"));

const port = process.env.PORT || 30000;

app.listen(port, console.log(`listening on port ${port}`));
