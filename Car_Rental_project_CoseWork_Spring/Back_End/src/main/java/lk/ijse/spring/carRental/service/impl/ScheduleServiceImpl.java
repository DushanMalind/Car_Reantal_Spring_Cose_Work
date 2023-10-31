package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.ScheduleDTO;
import lk.ijse.spring.carRental.service.ScheduleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 14:59
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */
@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {
    @Override
    public String generateScheduleId() {
        return null;
    }

    @Override
    public void saveSchedule(ScheduleDTO scheduleDTO) {

    }

    @Override
    public List<ScheduleDTO> getAllSchedules() {
        return null;
    }
}
