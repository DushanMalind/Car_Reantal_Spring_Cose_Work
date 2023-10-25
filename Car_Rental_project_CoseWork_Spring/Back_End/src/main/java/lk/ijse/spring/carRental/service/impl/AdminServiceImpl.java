package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.AdminDTO;
import lk.ijse.spring.carRental.service.AdminService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

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

    @Override
    public void addAdmin(AdminDTO dto) {

    }

    @Override
    public void deleteAdmin(String id) {

    }

    @Override
    public void updateAdmin(AdminDTO dto) {

    }

    @Override
    public ArrayList<AdminDTO> getAllAdmins() {
        return null;
    }

    @Override
    public AdminDTO findByPasswordAndUsername(String password, String name) {
        return null;
    }
}
