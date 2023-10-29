package lk.ijse.spring.carRental;

import lk.ijse.spring.carRental.config.WebAppConfig;
import lk.ijse.spring.carRental.config.WebRootConfig;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletRegistration;

/**
 * `@authority` DUSHAN MALINDA
 * 22:15
 * 14/10/2023
 * ASUS
 * Car_Rental_Project
 * lk.ijse.spring.carRental
 */
public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{WebRootConfig.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{WebAppConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    @Override
    protected void customizeRegistration(ServletRegistration.Dynamic registration) {
        registration.setMultipartConfig(new MultipartConfigElement(System.getProperty("java.io.tmpdir")));
    }
}
