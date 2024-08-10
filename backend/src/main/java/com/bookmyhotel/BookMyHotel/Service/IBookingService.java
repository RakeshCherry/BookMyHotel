package com.bookmyhotel.BookMyHotel.Service;

import com.bookmyhotel.BookMyHotel.Model.BookedRoom;

import java.util.List;
import java.util.Optional;

public interface IBookingService {
    void cancelBooking(Long bookingId);

    String saveBooking(Long roomId, BookedRoom bookingRequest);

    Optional<BookedRoom> findByBookingConfirmationCode(String confirmationCode);

    List<BookedRoom> getAllBookings();
}
