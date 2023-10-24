package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

/**
 * `@authority` DUSHAN MALINDA
 * 10:53
 * 21/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String customerId;

    private UsersDTO users;

    private String customerName;
    private LocalDate registeredDate;
    private String customerEmail;
    private String customerNIC;
    private String customerAddress;
    private String customerContact;
    private String customerDrivingLicenseId;
    private String customerDrivingLicenseImage;
}
