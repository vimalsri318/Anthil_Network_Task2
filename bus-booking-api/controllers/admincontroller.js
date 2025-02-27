
const Bus = require("../models/busmodel");

// ✅ Add a new bus
exports.addBus = async (req, res) => {
    try {
        const { name, source, destination, departureTime, availableSeats, price } = req.body;
        const newBus = new Bus({ name, source, destination, departureTime, availableSeats, price });

        await newBus.save();
        res.status(201).json({ message: "Bus added successfully", bus: newBus });
    } catch (error) {
        res.status(500).json({ error: "Error adding bus" });
    }
};

// ✅ Update a bus
exports.updateBus = async (req, res) => {
    try {
        const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bus) return res.status(404).json({ error: "Bus not found" });

        res.json({ message: "Bus updated successfully", bus });
    } catch (error) {
        res.status(500).json({ error: "Error updating bus" });
    }
};

// ✅ Delete a bus
exports.deleteBus = async (req, res) => {
    try {
        const bus = await Bus.findByIdAndDelete(req.params.id);
        if (!bus) return res.status(404).json({ error: "Bus not found" });

        res.json({ message: "Bus deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting bus" });
    }
};