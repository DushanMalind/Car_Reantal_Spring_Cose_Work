package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * `@authority` DUSHAN MALINDA
 * 15:17
 * 02/11/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.repo
 */
public interface PaymentRepo extends JpaRepository<Payment,String> {

}
