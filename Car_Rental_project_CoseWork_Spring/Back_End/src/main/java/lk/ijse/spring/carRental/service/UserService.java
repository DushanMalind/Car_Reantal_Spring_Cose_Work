package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.UserDTO;

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
    void saveUser(UserDTO usersDTO);

    void updateUser(UserDTO usersDTO);

    void deleteUser(String id);

    UserDTO searchUser(String id);

    List<UserDTO> getAllUsers();

    String generateUserIds();

    UserDTO findByPasswordAndUsername(String password, String username);

    UserDTO findByUsername(String username);

}
