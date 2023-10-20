package lk.ijse.spring.carRental.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * `@authority` DUSHAN MALINDA
 * 10:40
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.config
 */


@Configuration
@Import({JPAConfig.class})
@ComponentScan(basePackages = "lk.ijse.spring.carRental.service")
public class WebRootConfig {
    public WebRootConfig() {
        System.out.println("WebRootConfig:Web Root Instantiated");
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
