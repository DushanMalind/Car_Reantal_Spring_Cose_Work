package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.AdminDTO;

import java.util.ArrayList;

/**
 * `@authority` DUSHAN MALINDA
 * 13:56
 * 25/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface AdminService {

    void addAdmin(AdminDTO dto);

    void deleteAdmin(String id);

    void updateAdmin(AdminDTO dto);

    ArrayList<AdminDTO> getAllAdmins();

    AdminDTO findByPasswordAndUsername(String password, String name);
}
