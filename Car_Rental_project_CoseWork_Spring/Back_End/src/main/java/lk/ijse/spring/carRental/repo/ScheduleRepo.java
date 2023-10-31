package lk.ijse.spring.carRental.repo;

import org.springframework.data.jpa.repository.Query;

/**
 * `@authority` DUSHAN MALINDA
 * 13:58
 * 31/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.repo
 */
public interface ScheduleRepo {

    @Query(value = "SELECT scheduleId FROM Schedule ORDER BY scheduleId DESC LIMIT 1",nativeQuery = true)
    String generateScheduleId();
}
