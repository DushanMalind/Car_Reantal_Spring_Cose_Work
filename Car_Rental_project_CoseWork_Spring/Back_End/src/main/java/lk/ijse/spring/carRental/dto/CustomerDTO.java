package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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

    private UserDTO users;

    private String customerName;
    private String customerEmail;
    private String customerNIC;
    private String customerAddress;
    private String customerContact;
    private String customerDrivingLicenseId;
    private String customerDrivingLicenseImage;
}