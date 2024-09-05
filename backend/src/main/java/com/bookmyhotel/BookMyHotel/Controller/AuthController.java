package com.bookmyhotel.BookMyHotel.Controller;

import com.bookmyhotel.BookMyHotel.Exception.UserAlreadyExistsException;
import com.bookmyhotel.BookMyHotel.Model.User;
import com.bookmyhotel.BookMyHotel.Service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
public class AuthController {
    private final IUserService userService;

    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(User user){
        try {
            userService.registerUser(user);
            return ResponseEntity.ok("Registration successful");
        }catch (UserAlreadyExistsException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
