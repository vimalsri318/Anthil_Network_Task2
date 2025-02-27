const Bus = require("../models/busmodel");
const Booking = require("../models/bookingmodel");

// ✅ Search for buses
exports.searchBuses = async (req, res) => {
    try {
        const { source, destination } = req.query;
        const buses = await Bus.find({ source, destination });

        res.json({ buses });
    } catch (error) {
        res.status(500).json({ error: "Error searching buses" });
    }
};

// ✅ Book a bus
exports.bookBus = async (req, res) => {  // Make sure this line has `exports.bookBus`
    try {
        const { busId, userId, seats } = req.body;

        // Check if the bus exists
        const bus = await Bus.findById(busId);
        if (!bus) {
            return res.status(404).json({ message: "Bus not found" });
        }

        // Check if enough seats are available
        if (bus.availableSeats < seats) {
            return res.status(400).json({ message: "Not enough seats available" });
        }

        // Create a new booking
        const booking = new Booking({ userId, busId, seats });
        await booking.save();

        // Update available seats in the bus
        bus.availableSeats -= seats;
        await bus.save();

        return res.status(201).json({ message: "Booking successful", booking });
    } catch (error) {
        console.error("Booking Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// ✅ Cancel a booking
exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ error: "Booking not found" });

        const bus = await Bus.findById(booking.busId);
        bus.availableSeats += booking.seats;
        await bus.save();

        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: "Booking canceled successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error canceling booking" });
    }
};