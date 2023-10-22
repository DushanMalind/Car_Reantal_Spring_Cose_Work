package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.UserDTO;
import lk.ijse.spring.carRental.service.UserService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 12:44
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Override
    public void saveUser(UserDTO usersDTO) {

    }

    @Override
    public void updateUser(UserDTO usersDTO) {

    }

    @Override
    public void deleteUser(String id) {

    }

    @Override
    public UserDTO searchUser(String id) {
        return null;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return null;
    }

    @Override
    public String generateUserIds() {
        return null;
    }

    @Override
    public UserDTO findByPasswordAndUsername(String password, String username) {
        return null;
    }

    @Override
    public UserDTO findByUsername(String username) {
        return null;
    }
}
