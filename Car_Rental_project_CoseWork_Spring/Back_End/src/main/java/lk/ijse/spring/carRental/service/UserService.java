package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.UsersDTO;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 12:24
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface UserService {
    void saveUser(UsersDTO usersDTO);

    void updateUser(UsersDTO usersDTO);

    void deleteUser(String id);

    UsersDTO searchUser(String id);

    List<UsersDTO> getAllUsers();

    String generateUserIds();

    UsersDTO findByPasswordAndUsername(String password, String username);

    UsersDTO findByUsername(String username);

}
