package com.bookmyhotel.BookMyHotel.Repository;

import com.bookmyhotel.BookMyHotel.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
