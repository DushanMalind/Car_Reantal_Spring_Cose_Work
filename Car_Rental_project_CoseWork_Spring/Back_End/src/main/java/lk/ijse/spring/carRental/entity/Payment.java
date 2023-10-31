package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * `@authority` DUSHAN MALINDA
 * 17:00
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.entity
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Payment {
    @Id
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

    @OneToOne(cascade = CascadeType.ALL)
    private ReserveDetails reserveDetails;
}
