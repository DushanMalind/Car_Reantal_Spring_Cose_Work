package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority` DUSHAN MALINDA
 * 12:58
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class UsersDTO {
    private String userId;
    private String username;
    private String password;
}
