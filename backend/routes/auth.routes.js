const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validate.middleware");
const { authenticate } = require("../middlewares/auth.middleware");

router.post("/register", validateRegister, authController.register);
router.post("/login", validateLogin, authController.login);
router.get("/me", authenticate, authController.me);

module.exports = router;