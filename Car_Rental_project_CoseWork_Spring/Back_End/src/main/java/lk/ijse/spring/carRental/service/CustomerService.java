package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.CustomerDTO;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 14:43
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface CustomerService {
    void saveCustomer(CustomerDTO customer);

    void updateCustomer(CustomerDTO customer);

    void deleteCustomer(String id);

    CustomerDTO searchCustomer(String id);

    List<CustomerDTO> getAllCustomers();

    String generateCustomerIds();

    int countRegisteredCustomers();

    int countDailyRegisteredCustomers(String date);

    CustomerDTO searchUserFromCustomer(String id);

    CustomerDTO findCustomerToReserve(String nic);

    CustomerDTO availableCustomer(String userName);
}
