package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.CarDTO;
import lk.ijse.spring.carRental.service.CarService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 13:08
 * 27/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */
@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Override
    public void saveCar(CarDTO dto) {

    }

    @Override
    public void updateCar(CarDTO dto) {

    }

    @Override
    public void deleteCar(String id) {

    }

    @Override
    public CarDTO searchCar(String id) {
        return null;
    }

    @Override
    public List<CarDTO> getAllCars() {
        return null;
    }

    @Override
    public String generateCarIds() {
        return null;
    }

    @Override
    public String searchRegNumberIsExists(String reg) {
        return null;
    }

    @Override
    public void carAvailableOrNot(String available, String id) {

    }

    @Override
    public List<CarDTO> sortAccordingToPassengersByAscending() {
        return null;
    }

    @Override
    public List<CarDTO> sortAccordingToPassengersByDescending() {
        return null;
    }

    @Override
    public List<CarDTO> sortAccordingToDailyRatePriceByDescending() {
        return null;
    }

    @Override
    public List<CarDTO> sortAccordingToDailyRatePriceByAscending() {
        return null;
    }

    @Override
    public List<CarDTO> sortAccordingToMonthlyRatePriceByAscending() {
        return null;
    }

    @Override
    public List<CarDTO> sortAccordingToMonthlyRatePriceByDescending() {
        return null;
    }

    @Override
    public List<CarDTO> findByTransmissionType(String type) {
        return null;
    }

    @Override
    public List<CarDTO> findByBrand(String brand) {
        return null;
    }

    @Override
    public List<CarDTO> findByType(String type) {
        return null;
    }

    @Override
    public List<CarDTO> findByFuelType(String fuelType) {
        return null;
    }

    @Override
    public List<CarDTO> findByColour(String colour) {
        return null;
    }

    @Override
    public int noOfAvailableOrReservedCars(String availability) {
        return 0;
    }

    @Override
    public int needMaintenanceOrUnderMaintenanceCars(String maintain) {
        return 0;
    }
}
