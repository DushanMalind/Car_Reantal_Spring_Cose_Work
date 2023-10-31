package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority` DUSHAN MALINDA
 * 17:03
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentId;
    private String paymentDate;
    private double rentFee;
    private String harmOrNot;
    private double loseDamagePayment;
    private double reduceLoseDamagePayment;
    private double driverFee;
    private double travelledDistance;
    private double extraKm;
    private double extraKmPrice;
    private double fullPayment;

    private ReserveDetailsDTO reserveDetails;
}
