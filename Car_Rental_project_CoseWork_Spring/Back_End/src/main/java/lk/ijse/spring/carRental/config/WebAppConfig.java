package lk.ijse.spring.carRental.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * `@authority` DUSHAN MALINDA
 * 10:39
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.config
 */

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "lk.ijse.spring.carRental.controller")
public class WebAppConfig {
    public WebAppConfig() {
        System.out.println("WebAppConfig:Web App Instantiated");
    }
}
