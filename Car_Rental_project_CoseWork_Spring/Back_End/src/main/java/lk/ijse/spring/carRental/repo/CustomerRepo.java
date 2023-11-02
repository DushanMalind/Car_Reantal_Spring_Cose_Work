package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * `@authority` DUSHAN MALINDA
 * 14:18
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.repo
 */
public interface CustomerRepo extends JpaRepository<Customer,String> {

    @Query(value = "SELECT customerId FROM Customer ORDER BY customerId DESC LIMIT 1", nativeQuery = true)
    String generateCustomerId();

    @Query(value = "SELECT COUNT(*) FROM Customer", nativeQuery = true)
    int countRegisteredCustomers();

    @Query(value = "SELECT COUNT(*) FROM Customer WHERE registeredDate=:date", nativeQuery = true)
    int countDailyRegisteredCustomers(@Param("date") String date);

    @Query(value = "SELECT * FROM Customer WHERE users_userId=:id", nativeQuery = true)
    Customer searchUserFromCustomer(@Param("id") String id);

    @Query(value = "SELECT * FROM Customer WHERE customerNIC=:nic", nativeQuery = true)
    Customer findCustomerToReserve(@Param("nic") String nic);

    @Query(value = "SELECT Customer.customerId,Customer.customerNIC,Customer.customerName,Customer.customerAddress,Customer.customerContact,Customer.customerEmail,Customer.registeredDate,Customer.customerStatus FROM Customer JOIN Users ON Users.userId = Customer.users_userId WHERE Users.userName=:userName", nativeQuery = true)
    CustomerDTO availableCustomer(String userName);

}
