package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.ReserveDTO;
import lk.ijse.spring.carRental.service.ReserveService;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 11:00
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */
public class ReserveServiceImpl implements ReserveService {
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
