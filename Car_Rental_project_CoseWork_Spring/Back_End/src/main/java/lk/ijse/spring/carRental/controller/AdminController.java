package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.AdminDTO;
import lk.ijse.spring.carRental.service.AdminService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * `@authority` DUSHAN MALINDA
 * 14:27
 * 25/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.controller
 */

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    AdminService service;

    @PostMapping
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO dto){
        service.addAdmin(dto);
        return new ResponseUtil("Ok",dto.getAdminId()+" Successfully Added..",null);
    }

    @GetMapping
    public ResponseUtil getAllAdmins(){
        ArrayList<AdminDTO> allAdmins = service.getAllAdmins();
        return new ResponseUtil("Ok","Success..",allAdmins);
    }
}
