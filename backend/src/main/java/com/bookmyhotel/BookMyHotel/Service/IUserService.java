package com.bookmyhotel.BookMyHotel.Service;

import com.bookmyhotel.BookMyHotel.Model.User;

import java.util.List;

public interface IUserService {
    User registerUser(User user);
    List<User> getUsers();
    void deleteUser(String email);
    User getUser(String email);
}
