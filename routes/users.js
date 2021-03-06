const express = require("express");
const router = express.Router();
const userController = require("../app/api/controllers/users");

router.post("/signup", userController.create);
router.post("/signin", userController.authenticate);
router.post("/verify", userController.verify);

module.exports = router;
