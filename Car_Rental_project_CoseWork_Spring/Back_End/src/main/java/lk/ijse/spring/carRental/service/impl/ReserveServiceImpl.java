package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.ReserveDTO;
import lk.ijse.spring.carRental.repo.CarRepo;
import lk.ijse.spring.carRental.repo.DriverRepo;
import lk.ijse.spring.carRental.repo.ReserveRepo;
import lk.ijse.spring.carRental.service.ReserveService;
import org.modelmapper.ModelMapper;
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
        return null;
    }

    @Override
    public void saveReservationCars(ReserveDTO reserveDTO) {

    }

    @Override
    public List<ReserveDTO> getAllReservations() {
        return null;
    }

    @Override
    public ReserveDTO searchReservation(String rId) {
        return null;
    }

    @Override
    public int countDailyReservation(String date) {
        return 0;
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
