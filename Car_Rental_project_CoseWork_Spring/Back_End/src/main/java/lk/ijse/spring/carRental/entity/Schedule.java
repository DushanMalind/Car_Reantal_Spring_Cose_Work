package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * `@authority` DUSHAN MALINDA
 * 18:13
 * 30/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.entity
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Schedule {
    @Id
    private String scheduleId;

    private String pickUpDate;
    private String pickUpTime;
    private String returnDate;
    private String returnTime;
    private String pickUpVenue;
    private String returnVenue;
    private String releaseOrNot;

    @OneToOne(cascade = CascadeType.ALL)
    private ReserveDetails reserveDetails;
}
