package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority` DUSHAN MALINDA
 * 18:18
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */
@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){
        customerService.saveCustomer(dto);
        return new ResponseUtil("Ok", "Successfully Registered.",dto);
    }


    @GetMapping(path = "/{id}")
    public ResponseUtil searchCustomer(@PathVariable String id){
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.searchCustomer(id));
    }


    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO dto){
        customerService.updateCustomer(dto);
        return new ResponseUtil("Ok", "Successfully Updated.",null);
    }


}
