package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

/**
 * `@authority` DUSHAN MALINDA
 * 14:15
 * 30/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.entity
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class Reserve {
    @Id
    private String reserveId;
    private String reserveDate;
    private String pickUpDate;
    private String pickUpTime;
    private String destination;
    private int duration;
    private String pickUpVenue;
    private String returnVenue;
    private String returnDate;
    private String returnTime;
    private String requestAcceptOrDeny;


    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "customerId", referencedColumnName = "customerId", nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "reserve",cascade = CascadeType.ALL)
    private List<ReserveDetails> reserveDetails;

}
