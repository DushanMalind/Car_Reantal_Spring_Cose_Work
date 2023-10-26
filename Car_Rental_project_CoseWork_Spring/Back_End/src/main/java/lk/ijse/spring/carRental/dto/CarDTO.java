package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority` DUSHAN MALINDA
 * 19:14
 * 26/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.dto
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarDTO {
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
