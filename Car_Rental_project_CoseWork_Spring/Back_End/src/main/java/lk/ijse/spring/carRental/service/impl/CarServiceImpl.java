package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.CarDTO;
import lk.ijse.spring.carRental.entity.Car;
import lk.ijse.spring.carRental.repo.CarRepo;
import lk.ijse.spring.carRental.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDTO dto) {
        if (!carRepo.existsById(dto.getCarId())) {
            carRepo.save(mapper.map(dto, Car.class));
        } else {
            throw new RuntimeException(dto.getCarId() + " " + "Car Already Exists..!");
        }
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (carRepo.existsById(dto.getCarId())) {
            carRepo.save(mapper.map(dto, Car.class));
        } else {
            throw new RuntimeException(dto.getCarId() + " " + "No Such Car..! Please Check The Car ..!");
        }
    }

    @Override
    public void deleteCar(String id) {
        if (carRepo.existsById(id)) {
            carRepo.deleteById(id);
        } else {
            throw new RuntimeException(id + " " + "No Such Car..! Please Check The Correct Id..!");
        }
    }

    @Override
    public CarDTO searchCar(String id) {
        if (carRepo.existsById(id)) {
            Car car = carRepo.findById(id).get();
            return mapper.map(car, CarDTO.class);
        } else {
            throw new RuntimeException(id + " " + "No Such Car..! Please Check The Correct Id..!");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        List<Car> carList = carRepo.findAll();
        return mapper.map(carList,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public String generateCarIds() {
        return carRepo.generateCarId();
    }

    @Override
    public String searchRegNumberIsExists(String reg) {
        return carRepo.searchRegNumberIsExists(reg);
    }

    @Override
    public void carAvailableOrNot(String available, String id) {
        carRepo.carAvailableOrNot(available,id);
    }

    @Override
    public List<CarDTO> sortAccordingToPassengersByAscending() {
        List<Car>cars=carRepo.sortAccordingToPassengersByDescending();
        return mapper.map(cars,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> sortAccordingToPassengersByDescending() {
       List<Car> cars=carRepo.sortAccordingToPassengersByAscending();
       return mapper.map(cars,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> sortAccordingToDailyRatePriceByDescending() {
        List<Car> cars=carRepo.sortAccordingToDailyRatePriceByDescending();
        return mapper.map(cars,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> sortAccordingToDailyRatePriceByAscending() {
        List<Car> cars=carRepo.sortAccordingToDailyRatePriceByAscending();
        return mapper.map(cars,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> sortAccordingToMonthlyRatePriceByAscending() {
        List<Car>cars=carRepo.sortAccordingToMonthlyRatePriceByAscending();
        return mapper.map(cars,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> sortAccordingToMonthlyRatePriceByDescending() {
        List<Car>cars=carRepo.sortAccordingToMonthlyRatePriceByDescending();
        return mapper.map(cars,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> findByTransmissionType(String type) {
        List<Car>all=carRepo.findByTransmissionType(type);
        return mapper.map(all,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> findByBrand(String brand) {
        List<Car>all=carRepo.findByBrand(brand);
        return mapper.map(all,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> findByType(String type) {
        List<Car>all=carRepo.findByType(type);
        return mapper.map(all,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> findByFuelType(String fuelType) {
        List<Car>all=carRepo.findByFuelType(fuelType);
        return mapper.map(all,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public List<CarDTO> findByColour(String colour) {
        List<Car>all=carRepo.findByColour(colour);
        return mapper.map(all,new TypeToken<List<CarDTO>>(){}.getType());
    }

    @Override
    public int noOfAvailableOrReservedCars(String availability) {
        return carRepo.noOfAvailableOrReservedCars(availability);
    }

    @Override
    public int needMaintenanceOrUnderMaintenanceCars(String maintain) {
        return carRepo.needMaintenanceOrUnderMaintenanceCars(maintain);
    }
}
