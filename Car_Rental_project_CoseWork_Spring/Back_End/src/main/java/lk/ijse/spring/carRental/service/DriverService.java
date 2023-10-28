package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.DriverDTO;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 19:28
 * 28/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface DriverService {
    void saveDriver(DriverDTO driver);

    void updateDriver(DriverDTO driver);

    void deleteDriver(String id);

    DriverDTO searchDriver(String id);

    List<DriverDTO> getAllDrivers();

    String generateDriverIds();

    DriverDTO searchUserFromDriver(String id);

    DriverDTO assignRandomlyDriver(String release);

    List<DriverDTO> searchAvailableDriversOrReleaseDrivers(String release);

    int availableDriversOrOccupiedDrivers(String release);

}
