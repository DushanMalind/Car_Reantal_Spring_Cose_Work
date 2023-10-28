package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.DriverDTO;
import lk.ijse.spring.carRental.service.DriverService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority` DUSHAN MALINDA
 * 19:52
 * 28/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */
@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO driverDTO){
        driverService.saveDriver(driverDTO);
        return new ResponseUtil("Ok", "Successfully Saved.",null);
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateDriverIds(@RequestParam String test) {
        return new ResponseUtil("Ok", "Successfully Searched.", driverService.generateDriverIds());
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil("Ok", "Ok", driverService.getAllDrivers());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String id){
        return new ResponseUtil("Ok", "Successfully Searched.",driverService.searchDriver(id));
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO){
        driverService.updateDriver(driverDTO);
        return new ResponseUtil("Ok", "Successfully Update.",null);
    }

    @GetMapping(path = "/USER/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchUserFromDriver(@PathVariable("id") String id){
        return new ResponseUtil("Ok", "Successfully Searched.",driverService.searchUserFromDriver(id));
    }

    @GetMapping(path = "/status/{release}")
    public ResponseUtil assignRandomlyDriver(@PathVariable("release") String release) {
        return new ResponseUtil("Ok", "Successfully Searched.", driverService.assignRandomlyDriver(release));
    }

    @GetMapping(path = "/RELEASE/{release}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchAvailableDriversOrReleasedDrivers(@PathVariable("release") String release){
        return new ResponseUtil("Ok", "Successfully Searched.",driverService.searchAvailableDriversOrReleaseDrivers(release));
    }

    @GetMapping(path = "/countOfAvailableDrivers/{release}")
    public ResponseUtil availableDriversOrOccupiedDrivers(@PathVariable("release") String release) {
        return new ResponseUtil("Ok", "Successfully Searched.", driverService.availableDriversOrOccupiedDrivers(release));
    }

}
