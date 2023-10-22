package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.entity.Customer;
import lk.ijse.spring.carRental.repo.CustomerRepo;
import lk.ijse.spring.carRental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 14:56
 * 22/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO customer) {
        if (!repo.existsById(customer.getCustomerId())) {
            throw new RuntimeException(customer.getCustomerId() + "is already available, please insert a new ID..!");
        }
        repo.save(mapper.map(customer, Customer.class));
    }

    @Override
    public void updateCustomer(CustomerDTO customer) {
        if (repo.existsById(customer.getCustomerId())) {
            repo.save(mapper.map(customer, Customer.class));
        } else {
            throw new RuntimeException(customer.getCustomerId() + "No Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException(id + "No Please Check The Correct Id..!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (repo.existsById(id)) {
            Customer customer = repo.findById(id).get();
            return mapper.map(customer, CustomerDTO.class);
        } else {
            throw new RuntimeException(id + "No Please Check The Correct Id..!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return null;
    }

    @Override
    public String generateCustomerIds() {
        return null;
    }

    @Override
    public int countRegisteredCustomers() {
        return 0;
    }

    @Override
    public int countDailyRegisteredCustomers(String date) {
        return 0;
    }

    @Override
    public CustomerDTO searchUserFromCustomer(String id) {
        return null;
    }

    @Override
    public CustomerDTO findCustomerToReserve(String nic) {
        return null;
    }
}
