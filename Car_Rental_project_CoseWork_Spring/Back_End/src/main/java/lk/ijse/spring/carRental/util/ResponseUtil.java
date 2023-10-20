package lk.ijse.spring.carRental.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * `@authority` DUSHAN MALINDA
 * 12:17
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.util
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseUtil {
    private String state;
    private String message;
    private Object data;
}
