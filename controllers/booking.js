import { booking } from "../models/booking.js";
import {
  addBookingValidator,
  updateBookingValidator,
} from "../validators/booking.js";

export const getAllBookings = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
    //fetch bookings from database
    const bookings = await booking
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    //return response
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

export const getOneBooking = async (req, res, next) => {
  try {
    const oneBooking = await booking.findById(req.params.id);
    if (!oneBooking) {
      return res.status(404).json({ message: "booking  not found" });
    }
    res.status(200).json(oneBooking);
  } catch (error) {
    next(error);
  }
};

export const addBooking = async (req, res, next) => {
  try {
    // add booking validator
    const { error, value } = addBookingValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    //connect to database
    const newBooking = new booking({
      ...value,
      user: req.auth.id,
    });
    //save new data
    await booking.save();
    res.status(200).json("booking added successfully!");
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const { error, value } = updateBookingValidator.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details });
    }
    const updatedBooking = await booking.findByIdAndUpdate(
      { _id: req.params.id, user: req.auth.id },
      req.body,
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(201).json("Booking updated successfully!");
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    const deleteBooking = await booking.findById(req.params.id);
    if (!deleteBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    await booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking deleted!");
  } catch (error) {
    next(error);
  }
};
