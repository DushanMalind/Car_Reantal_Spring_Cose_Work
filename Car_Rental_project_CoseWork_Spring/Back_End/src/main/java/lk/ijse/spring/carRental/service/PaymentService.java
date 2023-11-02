package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.PaymentDTO;

import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 18:12
 * 02/11/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.service
 */
public interface PaymentService {
    String generatePaymentIds();

    void savePayment(PaymentDTO paymentDTO);

    List<PaymentDTO> getAllPayments();

    double totalIncome();

    List<PaymentDTO> getPaymentsBetweenDates(String startDate, String endDate);

    double dailyIncome();

    double weeklyIncome();

    double monthlyIncome();

    double yearlyIncome();
}
