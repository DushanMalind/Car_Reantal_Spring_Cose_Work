package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority` DUSHAN MALINDA
 * 13:06
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class AdminDTO {
    private String adminId;
    private String adminName;
    private String adminAddress;
    private String adminContact;
    private String adminEmail;
}
