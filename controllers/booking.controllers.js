import { booking } from "../models/booking-model.js"


export const getAllBookings = async (req, res, next) =>{
   try {
     const getBooking = await booking.find(req.body);
     res.status(200).json(getBooking);
   } catch (error) {
    
    next(error);
   }

}

export const getOneBooking = async (req, res, next) =>{
   try {
        const getOneBooking = await booking.find(req.body);
        res.status(200).json(getOneBooking)
   } catch (error) {
     next(error);
   }
}

export const addBooking = async(req, res, next) =>{
    try {
        const newBooking = new booking(req.body)
            const bookings = await newBooking.save()
        
        res.status(201).json(bookings)
    } catch (error) {
       next(error) 
    }
}

export const updateBooking = (req, res, next) =>{
    res.status(201).json ('updating booking')
}

export const deleteBooking = (req, res, next) =>{
    res.status(200).json ('delete booking')
}