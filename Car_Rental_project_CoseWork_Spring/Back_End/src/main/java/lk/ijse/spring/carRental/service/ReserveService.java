package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.ReserveDTO;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 10:56
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface ReserveService {
    String generateReserveId();

    void saveReservationCars(ReserveDTO reserveDTO);

    List<ReserveDTO> getAllReservations();

    ReserveDTO searchReservation(String rId);

    int countDailyReservation(String date);

    int activeReservationPerDay(String date, String accept);

    int countAllReservation();

}
