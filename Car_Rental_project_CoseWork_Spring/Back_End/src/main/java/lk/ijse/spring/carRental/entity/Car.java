package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * `@authority` DUSHAN MALINDA
 * 13:42
 * 26/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.entity
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Car {
    @Id
    private String carId;
    private String registrationNo;
    private String colour;
    private String brand;
    private String type;
    private String fuelType;
    private String transmissionType;
    private int noOfPassengers;
    private int freeKmForDay;
    private int freeKmForMonth;
    private double pricePerExtraKM;
    private double dailyRatePrice;
    private double monthlyRatePrice;
    private int totalDistanceTraveled;
    private String availableOrNot;
    private String damageOrNot;
    private String underMaintainOrNot;
    private String fontViewImage;
    private String backViewImage;
    private String sideViewImage;
    private String interiorViewImage;
}
