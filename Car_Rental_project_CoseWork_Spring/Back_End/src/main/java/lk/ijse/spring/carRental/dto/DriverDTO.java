package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority` DUSHAN MALINDA
 * 14:55
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverId;

    private UsersDTO users;

    private String driverEmail;
    private String driverFirstName;
    private String driverLastName;
    private String driverNICNumber;
    private String driverDrivingLicenseId;
    private String driverContactNumber;
    private String driverAddress;
    private String availability;
}
