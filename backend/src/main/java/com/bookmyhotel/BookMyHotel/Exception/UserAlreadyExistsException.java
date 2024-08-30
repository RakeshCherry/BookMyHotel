package com.bookmyhotel.BookMyHotel.Exception;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException (String message) {
        super(message);
    }
}
