const express = require("express");
const { CreateCheckController } = require("../../../modules/checks/controller/createCheck.controller.js")
const { ListAllCheckController } = require("../../../modules/checks/controller/listAllCheck.controller.js")
const { DeleteCheckController } = require("../../../modules/checks/controller/deleteCheck.controlle.js")

const check = express.Router();

check.post("/create", CreateCheckController.execute);
check.get("/list", ListAllCheckController.execute)
check.delete("/delete/:num_input", DeleteCheckController.execute)

module.exports = { check };
