package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.CarDTO;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 23:04
 * 26/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface CarService {
    void saveCar(CarDTO dto);

    void updateCar(CarDTO dto);

    void deleteCar(String id);

    CarDTO searchCar(String id);

    List<CarDTO> getAllCars();

    String generateCarIds();

    String searchRegNumberIsExists(String reg);

    void carAvailableOrNot(String available, String id);

     /*for sort and filter*/

    List<CarDTO> sortAccordingToPassengersByAscending();

    List<CarDTO> sortAccordingToPassengersByDescending();

    List<CarDTO> sortAccordingToDailyRatePriceByDescending();

    List<CarDTO> sortAccordingToDailyRatePriceByAscending();

    List<CarDTO> sortAccordingToMonthlyRatePriceByAscending();

    List<CarDTO> sortAccordingToMonthlyRatePriceByDescending();

    /*for search by prop*/

    List<CarDTO> findByTransmissionType(String type);

    List<CarDTO> findByBrand(String brand);

    List<CarDTO> findByType(String type);

    List<CarDTO> findByFuelType(String fuelType);

    List<CarDTO> findByColour(String colour);

    /*for find Available cars*/

    int noOfAvailableOrReservedCars(String availability);

    /*for find Maintenance cars*/

    int needMaintenanceOrUnderMaintenanceCars(String maintain);


}
