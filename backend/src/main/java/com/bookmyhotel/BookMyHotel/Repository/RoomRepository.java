package com.bookmyhotel.BookMyHotel.Repository;

import com.bookmyhotel.BookMyHotel.Model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
