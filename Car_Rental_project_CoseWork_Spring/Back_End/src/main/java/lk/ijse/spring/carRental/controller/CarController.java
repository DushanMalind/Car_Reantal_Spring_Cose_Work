package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.CarDTO;
import lk.ijse.spring.carRental.service.CarService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority` DUSHAN MALINDA
 * 13:47
 * 27/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */
@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {
    @Autowired
    CarService carService;


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCar(){
        return new ResponseUtil("Ok", "Successfully Searched.",carService.getAllCars());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCar(@RequestBody CarDTO carDTO){
        carService.saveCar(carDTO);
        return new ResponseUtil("Ok", "Successfully Saved.",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@RequestParam String id){
        carService.deleteCar(id);
        return new ResponseUtil("Ok", "Successfully Deleted.",null);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDTO carDTO){
        carService.updateCar(carDTO);
        return new ResponseUtil("Ok", "Successfully Updated.",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCar(@PathVariable("id") String id){
        return new ResponseUtil("Ok", "Successfully Searched.",carService.searchCar(id));
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateCarIds(@RequestParam String test) {
        return new ResponseUtil("Ok", "Successfully Searched.",carService.generateCarIds());
    }

    @GetMapping(path = "/SEARCH/{reg}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRegNumberIsDuplicate(@PathVariable("reg") String reg){
        return new ResponseUtil("Ok", "Successfully Searched.",carService.searchRegNumberIsExists(reg));
    }

    @GetMapping(path = "/AVAILABLE/{available}/{carId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil carAvailableOrNot(@PathVariable("available") String available, @PathVariable("carId") String carId) {
        carService.carAvailableOrNot(available,carId);
        return new ResponseUtil("Ok", "Successfully Searched.",null);
    }

}
