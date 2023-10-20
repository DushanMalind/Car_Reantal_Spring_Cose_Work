package lk.ijse.spring.carRental.config;

import org.hibernate.cfg.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

/**
 * `@authority` DUSHAN MALINDA
 * 10:39
 * 20/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.config
 */

@Configuration
@EnableJpaRepositories(basePackages = "lk.ijse.spring.carRental.repo")
@EnableTransactionManagement
@PropertySource("classpath:properties.properties")
public class JPAConfig {

    @Autowired
    Environment env;

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(DataSource ds, JpaVendorAdapter vad){
        LocalContainerEntityManagerFactoryBean factory= new LocalContainerEntityManagerFactoryBean();
        factory.setDataSource(ds);
        factory.setJpaVendorAdapter(vad);
        //factory.setPackagesToScan(env.getRequiredProperty("pro.entity"));
        factory.setPackagesToScan("lk.ijse.spring.carRental.entity");
        return factory;

    }


}