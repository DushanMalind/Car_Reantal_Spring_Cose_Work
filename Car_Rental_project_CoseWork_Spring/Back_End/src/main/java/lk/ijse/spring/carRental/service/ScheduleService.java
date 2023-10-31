package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.ScheduleDTO;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 14:47
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface ScheduleService {
    String generateScheduleId();

    void saveSchedule(ScheduleDTO scheduleDTO);

    List<ScheduleDTO> getAllSchedules();
}
