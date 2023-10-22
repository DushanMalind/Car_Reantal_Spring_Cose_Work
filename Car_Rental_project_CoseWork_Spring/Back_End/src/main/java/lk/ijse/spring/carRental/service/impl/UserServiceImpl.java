package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.UserDTO;
import lk.ijse.spring.carRental.entity.Users;
import lk.ijse.spring.carRental.repo.UserRepo;
import lk.ijse.spring.carRental.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveUser(UserDTO usersDTO) {
        if(userRepo.existsById(usersDTO.getUserId())){
            throw new RuntimeException(usersDTO.getUserId()+"is already available, please insert a new ID..!");
        }
        userRepo.save(mapper.map(usersDTO, Users.class));
    }

    @Override
    public void updateUser(UserDTO usersDTO) {
        if(userRepo.existsById(usersDTO.getUserId())){
            userRepo.save(mapper.map(usersDTO, Users.class));
        }else{
            throw new RuntimeException(usersDTO.getUserId()+"No Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteUser(String id) {
        if(userRepo.existsById(id)){
            userRepo.deleteById(id);
        }else{
            throw new RuntimeException(id+"No Please Check The Correct Id..!");
        }
    }

    @Override
    public UserDTO searchUser(String id) {
        if(userRepo.existsById(id)){
            Users users = userRepo.findById(id).get();
            return mapper.map(users, UserDTO.class);
        }else {
            throw new RuntimeException(id+"No Please Check The Correct Id..!");
        }
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<Users> all=userRepo.findAll();
        return mapper.map(all,new TypeToken<List<UserDTO>>(){}.getType());
    }

    @Override
    public String generateUserIds() {
        return userRepo.generateUserId();
    }

    @Override
    public UserDTO findByPasswordAndUsername(String password, String username) {
         Users users = userRepo.findByPasswordAndUsername(password, username);
         return mapper.map(users, UserDTO.class);
    }

    @Override
    public UserDTO findByUsername(String username) {
        Users users = userRepo.findByUsername(username);
        return mapper.map(users, UserDTO.class);
    }
}
