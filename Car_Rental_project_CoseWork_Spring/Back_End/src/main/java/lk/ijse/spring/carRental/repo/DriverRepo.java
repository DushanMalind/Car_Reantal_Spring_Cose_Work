package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 18:41
 * 28/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.repo
 */
public interface DriverRepo extends JpaRepository<Driver,String> {

    @Query(value = "SELECT driverId FROM Driver ORDER BY driverId DESC LIMIT 1", nativeQuery = true)
    String generateDriverId();

    @Query(value = "SELECT * FROM Driver WHERE users_userId=:id", nativeQuery = true)
    Driver searchUserFromDriver(String id);

    @Query(value = "SELECT * FROM Driver WHERE releaseOrNot=:release ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Driver assignRandomlyDriver(@Param("release") String release);

    @Query(value = "SELECT * FROM Driver WHERE releaseOrNot=:release", nativeQuery = true)
    List<Driver> searchAvailableDriversOrReleasedDrivers(@Param("release") String release);

    @Query(value = "SELECT COUNT(*) FROM Driver WHERE releaseOrNot=:release", nativeQuery = true)
    int availableDriversOrOccupiedDrivers(@Param("release") String release);
}
