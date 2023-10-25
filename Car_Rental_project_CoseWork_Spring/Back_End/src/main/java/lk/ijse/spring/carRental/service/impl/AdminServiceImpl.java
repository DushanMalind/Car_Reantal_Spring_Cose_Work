package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.AdminDTO;
import lk.ijse.spring.carRental.entity.Admin;
import lk.ijse.spring.carRental.repo.AdminRepo;
import lk.ijse.spring.carRental.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 14:06
 * 25/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */
@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;


    @Autowired
    ModelMapper mapper;

    @Override
    public void addAdmin(AdminDTO dto) {
        if (adminRepo.existsById(dto.getAdminId())){
            throw new RuntimeException("Admin "+dto.getAdminId()+" Already Exists..!");
        }
        adminRepo.save(mapper.map(dto, Admin.class));
    }

    @Override
    public void deleteAdmin(String id) {
        if(!adminRepo.existsById(id)){
            throw new RuntimeException("Admin "+id+" Not Available to Delete..!");
        }
        adminRepo.deleteById(id);
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if(!adminRepo.existsById(dto.getAdminId())){
            throw new RuntimeException("Admin "+dto.getAdminId()+" Not Available to Update..!");
        }
        adminRepo.save(mapper.map(dto,Admin.class));
    }

    @Override
    public ArrayList<AdminDTO> getAllAdmins() {
        List<Admin> adminList= adminRepo.findAll();
        return  mapper.map(adminList,new TypeToken<ArrayList<AdminDTO>>() {}.getType());
    }

    @Override
    public AdminDTO findByPasswordAndUsername(String password, String name) {
        Admin admin = this.adminRepo.findByPasswordAndName(password, name);
        return mapper.map(admin,AdminDTO.class);
    }
}
