const express = require("express");
const router = express.Router();
const controller = require("../controllers/users-control")

router.get("/", controller.getUser);
router.post("/", controller.postUser);

module.exports = router;
