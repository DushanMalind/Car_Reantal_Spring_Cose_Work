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


    @GetMapping(path = "/sortPassengerAsc/{passengerAscending}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToPassengersByAscending(@PathVariable("passengerAscending") String passengerAscending) {
        return new ResponseUtil("Ok", "Successfully Searched.",carService.sortAccordingToPassengersByAscending());
    }


    @GetMapping(path = "/sortPassengerDsc/{passengerDscending}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToPassengersByDescending(@PathVariable("passengerDscending") String passengerDscending) {
        return new ResponseUtil("Ok", "Successfully Searched.",carService.sortAccordingToPassengersByDescending());
    }


    @GetMapping(path = "/sortDailyRateAsc/{dailyRateAsc}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToDailyRatePriceByAscending(@PathVariable("dailyRateAsc") String dailyRateAsc) {
        return new ResponseUtil("Ok", "Successfully Searched.",carService.sortAccordingToDailyRatePriceByAscending());
    }

    @GetMapping(path = "/sortDailyRateDsc/{dailyRateDsc}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToDailyRatePriceByDescending(@PathVariable("dailyRateDsc") String dailyRateDsc) {
        return new ResponseUtil("Ok", "Successfully Searched.",carService.sortAccordingToDailyRatePriceByDescending());
    }

    @GetMapping(path = "/sortMonthlyRateAsc/{monthlyRateAsc}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToMonthlyRatePriceByAscending(@PathVariable("monthlyRateAsc") String monthlyRateAsc) {
        return new ResponseUtil("Ok", "Successfully Searched.",carService.sortAccordingToMonthlyRatePriceByAscending());
    }


    @GetMapping(path = "/sortMonthlyRateDsc/{monthlyRateDsc}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToMonthlyRatePriceByDescending(@PathVariable("monthlyRateDsc") String monthlyRateDsc){
        return new ResponseUtil("Ok","Successfully Searched.",carService.sortAccordingToMonthlyRatePriceByDescending());
    }

        /**********/
    @GetMapping(path = "/schByTransmission/{type}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByTransmissionType(@PathVariable("type") String type){
        return new ResponseUtil("Ok","Successfully Searched.",carService.findByTransmissionType(type));
    }


    @GetMapping(path = "/schByCarType/{type}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByType(@PathVariable("type") String type){
        return new ResponseUtil("Ok","Successfully Searched.",carService.findByType(type));
    }


    @GetMapping(path = "/schByCarBrand/{brand}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByBrand(@PathVariable("brand") String brand){
        return new ResponseUtil("Ok","Successfully Searched.",carService.findByBrand(brand));
    }


    @GetMapping(path = "/schByFuelType/{fuelType}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByFuelType(@PathVariable("fuelType") String fuelType){
        return new ResponseUtil("Ok","Successfully Searched.",carService.findByFuelType(fuelType));
    }

    @GetMapping(path = "/schByColour/{colour}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByColour(@PathVariable("colour") String colour){
        return new ResponseUtil("Ok","Successfully Searched.",carService.findByColour(colour));
    }


    /*********************/

    @GetMapping(path = "/countOfAvailableCars/{availability}")
    public ResponseUtil noOfAvailableOrReservedCars(@PathVariable("availability") String availability){
        return new ResponseUtil("Ok","Successfully Searched.",carService.noOfAvailableOrReservedCars(availability));
    }

    @GetMapping(path = "/carMaintain/{maintain}")
    public ResponseUtil needMaintenanceOrUnderMaintenanceCars(@PathVariable("maintain") String maintain){
        return new ResponseUtil("Ok","Successfully Searched.",carService.needMaintenanceOrUnderMaintenanceCars(maintain));
    }

}
