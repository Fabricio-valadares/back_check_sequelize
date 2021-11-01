const express = require("express");
const { check } = require("./http/routes/check.route.js");
const cors = require('cors')
require("./database");

const port = process.env.PORT || 3000

const app = express();
app.use(cors())


app.use(express.json());

app.use("/api", check);

app.listen(port, () => {
  console.log("Server run !");
});
