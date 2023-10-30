package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority` DUSHAN MALINDA
 * 18:02
 * 30/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ReserveDTO {
    private String reserveId;
    private CustomerDTO customer;
    private String pickUpDate;
    private String reserveDate;
    private String pickUpTime;
    private String destination;
    private int duration;
    private String pickUpVenue;
    private String returnVenue;
    private String returnDate;
    private String returnTime;
    private String requestAcceptOrDeny;
}
