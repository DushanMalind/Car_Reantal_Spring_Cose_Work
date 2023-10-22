package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * `@authority` DUSHAN MALINDA
 * 12:18
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.repo
 */
public interface UserRepo extends JpaRepository<Users,String> {

    @Query(value = "SELECT userId FROM Users ORDER BY userId DESC LIMIT 1", nativeQuery = true)
    String generateUserId();

    Users findByPasswordAndUsername(String password, String username);

    Users findByUsername(String username);
}
