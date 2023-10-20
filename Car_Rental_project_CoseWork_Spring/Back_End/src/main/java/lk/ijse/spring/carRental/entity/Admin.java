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
 * 13:02
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.entity
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Admin {
    @Id
    private String adminId;
    private String adminName;
    private String adminAddress;
    private String adminContact;
    private String adminEmail;

    @OneToOne(cascade = CascadeType.ALL)
    private Users users;
}
