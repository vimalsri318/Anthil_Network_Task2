const express = require("express");
const { searchBuses, bookBus, cancelBooking } = require("../controllers/userController");
const { authenticate } = require("../middleware/authmiddleware");
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get("/profile", verifyToken, (req, res) => {
    res.json({ message: "User profile", user: req.user });
});

router.get("/buses", searchBuses);                // Search for buses
router.post('/book', verifyToken, bookBus);    // Book a bus
router.delete("/cancel/:id", authenticate, cancelBooking); // Cancel a booking

module.exports = router;