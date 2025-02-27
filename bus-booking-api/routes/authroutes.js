const express = require("express");
const router = express.Router();
const { register, login, refreshToken, logout } = require("../controllers/authcontroller");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);  // Ensure this is correctly defined
router.post("/logout", logout);

module.exports = router;