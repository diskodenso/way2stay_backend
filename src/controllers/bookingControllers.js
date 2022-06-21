import Booking from "../models/Booking.js";

export const getAllBookingsByFlatId = async (req, res) => {
    const { flatId } = req.params;
    try {
        const allBookings = await Booking.find({ flatId: flatId});
        res.status(200).json({ bookings: allBookings});
    } catch {
        res.status(500).json(error);
    }
};

export const getAllBookingsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const allBookings = await Booking.find({ userId: userId });
        res.status(200).json({ bookings: allBookings })
    } catch {
        res.status(500).json(error);
    }
};

export const getSingleBookingById = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const singleBooking = await Booking.findById(bookingId)
        res.status(200).json(singleBooking)
    } catch {
        res.status(500).json(error);
    }
};

export const createNewBooking = async (req, res) => {
    try {
        const { flat, approved, comments } = req.body;
        const newBooking = await Booking.create(
            {
                flat,
                approved,
                comments
            }
        );
        res.status(201).json(newBooking);
    } catch {
        res.status(500).json(error);
    }
};

export const deleteBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        await Booking.findByIdAndDelete(bookingId);
        res.status(200).send("Booking successfully deleted")
    } catch {
        res.status(500).json(error);
    }
};

export const updateBooking = async (req, res) => {
    const { bookingId } = req.params;
    const {
        flat,
        approved,
        comments
    } = req.body;
    try {
        const updatedBooking = {
            flat,
            approved,
            comments,
            modifiedAt: new Date()
        };
        const resUpdatedBooking = await Booking.findByIdAndUpdate(bookingId, updatedBooking, { new: true});
        res.status(200).json(resUpdatedBooking);
    } catch {
        res.status(500).json(error);
    }
};