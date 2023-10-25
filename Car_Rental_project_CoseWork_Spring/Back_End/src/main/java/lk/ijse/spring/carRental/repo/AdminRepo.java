package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * `@authority` DUSHAN MALINDA
 * 15:57
 * 25/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.repo
 */
public interface AdminRepo extends JpaRepository<Admin,String> {

        @Query(value = "select * from admin where password=?1 and name=?2",nativeQuery = true)
        Admin findByPasswordAndName(String password,String name);
}
