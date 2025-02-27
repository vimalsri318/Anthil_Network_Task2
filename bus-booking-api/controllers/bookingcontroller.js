const Booking = require('../models/Booking');
const Bus = require('../models/Bus');

const bookBus = async (req, res) => {
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

module.exports = { bookBus };