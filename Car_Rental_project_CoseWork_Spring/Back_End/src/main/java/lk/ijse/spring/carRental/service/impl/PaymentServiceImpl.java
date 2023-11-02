package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.PaymentDTO;
import lk.ijse.spring.carRental.repo.PaymentRepo;
import lk.ijse.spring.carRental.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 18:15
 * 02/11/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service.impl
 */
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String generatePaymentIds() {
        return null;
    }

    @Override
    public void savePayment(PaymentDTO paymentDTO) {

    }

    @Override
    public List<PaymentDTO> getAllPayments() {
        return null;
    }

    @Override
    public double totalIncome() {
        return 0;
    }

    @Override
    public List<PaymentDTO> getPaymentsBetweenDates(String startDate, String endDate) {
        return null;
    }

    @Override
    public double dailyIncome() {
        return 0;
    }

    @Override
    public double weeklyIncome() {
        return 0;
    }

    @Override
    public double monthlyIncome() {
        return 0;
    }

    @Override
    public double yearlyIncome() {
        return 0;
    }
}
