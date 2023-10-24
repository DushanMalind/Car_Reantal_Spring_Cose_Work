package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.UsersDTO;
import lk.ijse.spring.carRental.entity.Users;
import lk.ijse.spring.carRental.repo.UserRepo;
import lk.ijse.spring.carRental.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
     UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveUser(UsersDTO usersDTO) {
        if(!userRepo.existsById(usersDTO.getUserId())) {
            userRepo.save(mapper.map(usersDTO, Users.class));
        }/*else {
            throw new RuntimeException(usersDTO.getUserId()+" User Already Exists..!");
        }*/
    }

    @Override
    public void updateUser(UsersDTO usersDTO) {
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
    public UsersDTO searchUser(String id) {
        if(userRepo.existsById(id)){
            Users users = userRepo.findById(id).get();
            return mapper.map(users, UsersDTO.class);
        }else {
            throw new RuntimeException(id+"No Please Check The Correct Id..!");
        }
    }

    @Override
    public List<UsersDTO> getAllUsers() {
        List<Users> all=userRepo.findAll();
        return mapper.map(all,new TypeToken<List<UsersDTO>>(){}.getType());
    }

    @Override
    public String generateUserIds() {
        return userRepo.generateUserId();
    }

    @Override
    public UsersDTO findByPasswordAndUsername(String password, String username) {
         Users users = userRepo.findByPasswordAndUsername(password, username);
         return mapper.map(users, UsersDTO.class);
    }

    @Override
    public UsersDTO findByUsername(String username) {
        Users users = userRepo.findByUsername(username);
        return mapper.map(users, UsersDTO.class);
    }
}
