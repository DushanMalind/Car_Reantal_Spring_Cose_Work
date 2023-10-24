package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.UsersDTO;
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
    UserService userService;

    @PostMapping
    public ResponseUtil saveUser(UsersDTO userDTO){
        userService.saveUser(userDTO);
        return new ResponseUtil("Ok","Successfully Registered",userDTO);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchUser(@PathVariable String id){
        return new ResponseUtil("Ok","Successfully Searched",userService.searchUser(id));

    }

    @PutMapping
    public ResponseUtil updateUser(@RequestBody UsersDTO userDTO){
        userService.updateUser(userDTO);
        return new ResponseUtil("Ok","Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteUser(@RequestParam String id){
        userService.deleteUser(id);
        return new ResponseUtil("Ok","Successfully Deleted",null);
    }

    @GetMapping
    public ResponseUtil getAllUsers(){
        return new ResponseUtil("Ok","Successfully Searched",userService.getAllUsers());
    }


    @GetMapping(params = {"test"})
    public ResponseUtil generateUserIds(@RequestParam String test) {
        return new ResponseUtil("Ok","Successfully Searched",userService.generateUserIds());
    }

    @GetMapping(path ="/{password}/{username}")
    public ResponseUtil findByPasswordAndUsername(@PathVariable("password") String password, @PathVariable("username") String username){
        return new ResponseUtil("Ok","Successfully Searched",userService.findByPasswordAndUsername(password,username));
    }


    @GetMapping(path ="/FIND/{uname}")
    public ResponseUtil findByUsername(@PathVariable("uname") String uname){
        return new ResponseUtil("Ok","Successfully Searched",userService.findByUsername(uname));
    }


}
