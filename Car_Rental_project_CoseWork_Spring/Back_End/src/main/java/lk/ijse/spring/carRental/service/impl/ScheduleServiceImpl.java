package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.ScheduleDTO;
import lk.ijse.spring.carRental.entity.Schedule;
import lk.ijse.spring.carRental.repo.ScheduleRepo;
import lk.ijse.spring.carRental.service.ScheduleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 15:05
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */
@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {
    @Autowired
    ScheduleRepo scheduleRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String generateScheduleId() {
        return scheduleRepo.generateScheduleId();
    }

    @Override
    public void saveSchedule(ScheduleDTO scheduleDTO) {
        if (!scheduleRepo.existsById(scheduleDTO.getScheduleId())) {
            scheduleRepo.save(mapper.map(scheduleDTO, Schedule.class));
        }else {
            throw new RuntimeException(scheduleDTO.getScheduleId()+" Schedule Already Exists..!");
        }
    }

    @Override
    public List<ScheduleDTO> getAllSchedules() {
        List<Schedule>scheduleList=scheduleRepo.findAll();
        return mapper.map(scheduleList,new TypeToken<List<ScheduleDTO>>(){}.getType());
    }
}
