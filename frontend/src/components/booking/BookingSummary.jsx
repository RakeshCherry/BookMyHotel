import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingSummary = (booking, payment, isValidated, onConfirm) => {
  const checkInDate = moment(booking.checkInDate)
  const checkOutDate = moment(booking.checkOutDate)
  const numOfDays = checkOutDate.diff(checkInDate, "days")
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
  const [isProcessingPayment, setISProcessingPayment] = useState(false)
  const navigate = useNavigate()

  const handleConfirmBooking = () =>{
    setISProcessingPayment(true)
    setTimeout(() => {
      setISProcessingPayment(false)
      isBookingConfirmed(true)
      onConfirm()
    }, 3000)
  }

  useEffect(()=>{
    if(isBookingConfirmed){
      navigate("/booking-success")
    }
  },[isBookingConfirmed, navigate])
  return (
    <div></div>
  )
}

export default BookingSummary