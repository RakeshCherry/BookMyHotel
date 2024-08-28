package com.bookmyhotel.BookMyHotel.Service;

import com.bookmyhotel.BookMyHotel.Model.Role;
import com.bookmyhotel.BookMyHotel.Model.User;
import com.bookmyhotel.BookMyHotel.Repository.RoleRepository;
import com.bookmyhotel.BookMyHotel.Repository.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
public class UserService implements IUserService{
    private final UserRepository userRepository;
    private final passwordEndoder passwordEndoder;
    private final RoleRepository roleRepository;

    @Override
    public User registerUser(User user) {
        if (userRepository.existByEmail(user.getEmail())){
            throw new UserAlreadyExistsEception(user.getEmail() + "already exists");
        }
        user.setPassword(passwordEndoder.endcode(user.getPassword()));
        Role userRole = roleRepository.findByName("ROLE_USER").get();
        user.setRoles(Collection.singletonList(userRole));
        return userRepository.save(user);
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
