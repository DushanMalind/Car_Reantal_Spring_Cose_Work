package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.service.PaymentService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority` DUSHAN MALINDA
 * 18:33
 * 02/11/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
    @Autowired
    PaymentService paymentService;


    @GetMapping(params = {"test"})
    public ResponseUtil generatePaymentIds(@RequestParam String test){
        return new ResponseUtil("Ok","Successfully Generated",paymentService.generatePaymentIds());

    }
}
