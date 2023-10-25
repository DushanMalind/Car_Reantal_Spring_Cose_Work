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
    AdminService adminService;

    @PostMapping
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO dto){
        adminService.addAdmin(dto);
        return new ResponseUtil("Ok",dto.getAdminId()+" Successfully Added..",null);
    }

    @GetMapping
    public ResponseUtil getAllAdmins(){
        ArrayList<AdminDTO> allAdmins = adminService.getAllAdmins();
        return new ResponseUtil("Ok","Success..",allAdmins);
    }

    @DeleteMapping(params = "id")
    public ResponseUtil  deleteAdmin(String id){
        adminService.deleteAdmin(id);
        return new ResponseUtil("Ok",id+" Successfully deleted...!",null);
    }

    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody AdminDTO dto){
        adminService.updateAdmin(dto);
        return new ResponseUtil("Ok", dto.getAdminId()+" Successfully updated..", null);
    }

    @GetMapping(path ="/{password}/{name}")
    public ResponseUtil findByPasswordAndUsername(@PathVariable("password") String password, @PathVariable("name") String name){
        return new ResponseUtil("Ok", "Successfully Searched.",adminService.findByPasswordAndUsername(password,name));
    }
}
