package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority` DUSHAN MALINDA
 * 18:14
 * 30/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ScheduleDTO {
    private String scheduleId;
    private String pickUpDate;
    private String pickUpTime;
    private String returnDate;
    private String returnTime;
    private String pickUpVenue;
    private String returnVenue;
    private String releaseOrNot;

    private ReserveDetailsDTO reserveDetails;
}
