package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.service.ScheduleService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority` DUSHAN MALINDA
 * 15:31
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */
@RestController
@RequestMapping("/schedule")
@CrossOrigin
public class ScheduleController {
    @Autowired
    ScheduleService scheduleService;

    @GetMapping(params = {"tempId"})
    public ResponseUtil generateScheduleId(@RequestBody String tempId){
        return new ResponseUtil("Ok","Schedule Id Generated",scheduleService.generateScheduleId());
    }


}
