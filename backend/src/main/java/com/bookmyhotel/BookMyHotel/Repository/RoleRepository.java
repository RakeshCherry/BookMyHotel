package com.bookmyhotel.BookMyHotel.Repository;

import com.bookmyhotel.BookMyHotel.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String role);

    boolean existsByName(String roleName);
}
