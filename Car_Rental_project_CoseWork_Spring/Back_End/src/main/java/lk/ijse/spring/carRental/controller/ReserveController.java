package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.service.ReserveService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
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
}
