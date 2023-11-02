package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.dto.UsersDTO;
import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){
        customerService.saveCustomer(dto);
        return new ResponseUtil("Ok", "Successfully Registered.",null);
    }


    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String id){
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.searchCustomer(id));
    }


    @PutMapping(path = "/update",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@ModelAttribute CustomerDTO customerDTO, @ModelAttribute UsersDTO usersDTO){
        customerDTO.setUsers(usersDTO);
        customerService.updateCustomer(customerDTO);
        return new ResponseUtil("Ok", "Successfully Updated.",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String id){
        customerService.deleteCustomer(id);
        return new ResponseUtil("Ok", "Successfully Deleted.",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers(){
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.getAllCustomers());
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateCustomerIds(@RequestParam String test) {
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.generateCustomerIds());
    }

    @GetMapping(path ="/COUNT/{count}")
    public ResponseUtil countRegisteredCustomers(@PathVariable String count) {
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.countRegisteredCustomers());
    }

    @GetMapping(path ="/NewUsers/{date}")
    public ResponseUtil countDailyRegisteredCustomers(@PathVariable String date) {
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.countDailyRegisteredCustomers(date));
    }

    @GetMapping(path = "USER/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchUserFromCustomer(@PathVariable("id") String id){
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.searchUserFromCustomer(id));
    }

    @GetMapping(path = "/findValidNic/{nic}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findCustomerToReserve(@PathVariable("nic") String nic){
        return new ResponseUtil("Ok", "Successfully Searched.",customerService.findCustomerToReserve(nic));
    }

}
