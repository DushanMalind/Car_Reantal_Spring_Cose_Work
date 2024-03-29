package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.PaymentDTO;
import lk.ijse.spring.carRental.service.PaymentService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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


    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil savePayment(@RequestBody PaymentDTO paymentDTO){
        paymentService.savePayment(paymentDTO);
        return new ResponseUtil("Ok","Successfully Saved",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPayments(){
        return new ResponseUtil("Ok","Successfully Loaded",paymentService.getAllPayments());
    }

    @GetMapping(path = "/AllIncome/{income}")
    public ResponseUtil totalIncome(@PathVariable("income") String income){
        return new ResponseUtil("Ok","Successfully Loaded",paymentService.totalIncome());
    }

    @GetMapping("/payments")
    public ResponseUtil calculateIncomeDetails(@RequestParam("startDate") String startDate,
                                               @RequestParam("endDate") String endDate) {
        return new ResponseUtil("Ok","Successfully Loaded",paymentService.getPaymentsBetweenDates(startDate,endDate));
    }

    @GetMapping(path = "/daily")
    public ResponseUtil dailyIncome(){
        return new ResponseUtil("Ok","Successfully Loaded",paymentService.dailyIncome());
    }


    @GetMapping(path = "/weekly")
    public ResponseUtil weeklyIncome(){
        return new ResponseUtil("Ok","Successfully Loaded",paymentService.weeklyIncome());
    }

    @GetMapping(path = "/monthly")
    public ResponseUtil monthlyIncome(){
        return new ResponseUtil("Ok","Successfully Loaded",paymentService.monthlyIncome());
    }


    @GetMapping(path = "/yearly")
    public ResponseUtil yearlyIncome(){
        return new ResponseUtil("Ok","Successfully Loaded",paymentService.yearlyIncome());
    }

}
