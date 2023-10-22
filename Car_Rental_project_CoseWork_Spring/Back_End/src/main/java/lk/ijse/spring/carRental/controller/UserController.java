package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.UserDTO;
import lk.ijse.spring.carRental.service.UserService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority` DUSHAN MALINDA
 * 13:29
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseUtil saveUser(UserDTO userDTO){
        userService.saveUser(userDTO);
        return new ResponseUtil("Ok","Successfully Registered",userDTO);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchUser(@PathVariable String id){
        return new ResponseUtil("Ok","Successfully Searched",userService.searchUser(id));

    }

    @PutMapping
    public ResponseUtil updateUser(@RequestBody UserDTO userDTO){
        userService.updateUser(userDTO);
        return new ResponseUtil("Ok","Successfully Updated",null);
    }



}
