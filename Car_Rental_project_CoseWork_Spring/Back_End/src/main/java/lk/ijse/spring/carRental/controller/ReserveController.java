package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.ReserveDTO;
import lk.ijse.spring.carRental.service.ReserveService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority` DUSHAN MALINDA
 * 12:19
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */
@RestController
@RequestMapping("/reserve")
@CrossOrigin
public class ReserveController {
    @Autowired
    ReserveService reserveService;

    @GetMapping(params = {"tempId"})
    public ResponseUtil generateReserveId(@RequestParam String tempId){
        return new ResponseUtil("Ok","Successfully Searched.",reserveService.generateReserveId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveReservation(@RequestBody ReserveDTO reserveDTO){
        reserveService.saveReservationCars(reserveDTO);
        return new ResponseUtil("Ok","Your Booking Successfully.",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllReservations(){
        return new ResponseUtil("Ok","Successfully Searched.",reserveService.getAllReservations());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchReservation(@PathVariable String id){
        return new ResponseUtil("Ok","Successfully Searched.",reserveService.searchReservation(id));
    }

    @GetMapping(path ="/DailyReservation/{date}")
    public ResponseUtil countDailyReservation(@PathVariable("date") String date){
        return new ResponseUtil("Ok","Successfully Searched.",reserveService.countDailyReservation(date));
    }


    @GetMapping(path ="{date}/{accept}")
    public ResponseUtil activeReservationPerDay(@PathVariable("date") String date, @PathVariable("accept") String accept){
        return new ResponseUtil("Ok","Successfully Searched.",reserveService.activeReservationPerDay(date,accept));
    }


    @GetMapping(path ="/ReservationCount/{countAll}")
    public ResponseUtil countAllReservation(@PathVariable("countAll") String countAll){
        return new ResponseUtil("Ok","Successfully Searched.",reserveService.countAllReservation());
    }
}
