package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDate;

/**
 * `@authority` DUSHAN MALINDA
 * 10:43
 * 21/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.entity
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Customer {
    @Id
    private String customerId;
    private String customerName;
    private LocalDate registeredDate;
    private String customerEmail;
    private String customerNIC;
    private String customerAddress;
    private String customerContact;
    private String customerDrivingLicenseId;
    private String customerDrivingLicenseImage;


    @OneToOne(cascade = CascadeType.ALL)
    private Users users;
}
