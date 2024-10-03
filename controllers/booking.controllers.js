import { booking } from "../models/booking-model.js"


export const getAllBookings = (req, res, next) =>{
    res.status(200).json('these are all bookings')

}

export const getOneBooking = (req, res, next) =>{
    res.status(200).json('this is one booking')
}

export const addBooking = async(req, res, next) =>{
    const newBooking = new booking()
        const bookings = await newBooking.save(req.body)
    
    res.status(201).json(bookings)
}

export const updateBooking = (req, res, next) =>{
    res.status(201).json ('updating booking')
}

export const deleteBooking = (req, res, next) =>{
    res.status(200).json ('delete booking')
}