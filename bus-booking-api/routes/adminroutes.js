const express = require("express");
const { addBus, updateBus, deleteBus } = require("../controllers/adminController");
const { authenticate } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/bus", authenticate, addBus);       // Add Bus
router.put("/bus/:id", authenticate, updateBus); // Update Bus
router.delete("/bus/:id", authenticate, deleteBus); // Delete Bus

module.exports = router;