package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 15:17
 * 02/11/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.repo
 */
public interface PaymentRepo extends JpaRepository<Payment,String> {

    @Query(value = "SELECT paymentId FROM Payment ORDER BY paymentId DESC LIMIT 1", nativeQuery = true)
    String generatePaymentId();

    @Query(value = "SELECT SUM(fullPayment) FROM Payment", nativeQuery = true)
    double totalIncome();

    @Query(value = "SELECT * FROM Payment WHERE paymentDate BETWEEN :startDate AND :endDate", nativeQuery = true)
    List<Payment> findAllPaymentsBetweenDates(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
