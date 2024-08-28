package com.bookmyhotel.BookMyHotel.Service;

import com.bookmyhotel.BookMyHotel.Model.User;
import com.bookmyhotel.BookMyHotel.Repository.UserRepository;

import java.util.List;

public class UserService implements IUserService{
    private UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        if (userRepository != null)
        return null;
    }

    @Override
    public List<User> getUsers() {
        return null;
    }

    @Override
    public void deleteUser(String email) {

    }

    @Override
    public User getUser(String email) {
        return null;
    }
}
