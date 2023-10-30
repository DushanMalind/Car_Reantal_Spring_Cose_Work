package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

/**
 * `@authority` DUSHAN MALINDA
 * 18:06
 * 30/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.entity
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ReserveCars implements Serializable {
    private String reserveId;
    private String carId;
    private String driverId;
}
