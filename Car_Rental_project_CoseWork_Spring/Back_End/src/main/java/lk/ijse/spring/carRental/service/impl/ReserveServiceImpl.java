package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.ReserveDTO;
import lk.ijse.spring.carRental.entity.Car;
import lk.ijse.spring.carRental.entity.Driver;
import lk.ijse.spring.carRental.entity.Reserve;
import lk.ijse.spring.carRental.entity.ReserveDetails;
import lk.ijse.spring.carRental.repo.CarRepo;
import lk.ijse.spring.carRental.repo.DriverRepo;
import lk.ijse.spring.carRental.repo.ReserveRepo;
import lk.ijse.spring.carRental.service.ReserveService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 11:00
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */
@Service
@Transactional
public class ReserveServiceImpl implements ReserveService {
    @Autowired
    ReserveRepo reserveRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    CarRepo carRepo;

    @Autowired
    DriverRepo driverRepo;

    @Override
    public String generateReserveId() {
        return reserveRepo.generateReserveId();
    }

    @Override
    public void saveReservationCars(ReserveDTO dto) {
        Reserve reserve = modelMapper.map(dto, Reserve.class);

        if (!reserveRepo.existsById(dto.getReserveId())) {
            if (dto.getReserveDetails().size() < 1) {
                throw new RuntimeException("No Such Cars In Reservation..!");
            }else{
                reserveRepo.save(reserve);

                for (ReserveDetails details : reserve.getReserveDetails()) {

                    /*find reserve car and Change available status using carRepo*/
                    Car foundCar = carRepo.findById(details.getCarId()).get();
                    carRepo.save(foundCar);

                    /*find reserve Driver and Change his Release or Not status using driverRepo*/
                    if (driverRepo.existsById(details.getDriverId())) {
                        Driver driver = driverRepo.findById(details.getDriverId()).get();
                        /*for customer choose a driver, change driver status */
                        driver.setReleaseOrNot("Not Release");
                        driverRepo.save(driver);

                    }else if (details.getDriverId().equals("none")){

                        /*choose a driver situation */
                        reserveRepo.updateDriverId("none",reserve.getReserveId(),details.getCarId());
                    }
                }
            }
        }else{
            throw new RuntimeException(dto.getReserveId()+" Reservation Already Exist !!!");
        }
    }

    @Override
    public List<ReserveDTO> getAllReservations() {
        List<Reserve>reserveList=reserveRepo.findAll();
        return modelMapper.map(reserveList,new TypeToken<List<ReserveDTO>>(){}.getType());
    }

    @Override
    public ReserveDTO searchReservation(String rId) {
       if (reserveRepo.existsById(rId)) {
           Reserve reserve = reserveRepo.findById(rId).get();
           return modelMapper.map(reserve, ReserveDTO.class);
       }else{
           throw new RuntimeException("No Such Reservation..!.Please Check The ID..!");
       }
    }

    @Override
    public int countDailyReservation(String date) {
        return reserveRepo.countDailyReservation(date);
    }

    @Override
    public int activeReservationPerDay(String date, String accept) {
        return 0;
    }

    @Override
    public int countAllReservation() {
        return 0;
    }
}
