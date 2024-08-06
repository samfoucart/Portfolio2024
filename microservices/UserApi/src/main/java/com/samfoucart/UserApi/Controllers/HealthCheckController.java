package com.samfoucart.UserApi.Controllers;

import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HealthCheckController {
    private final Logger logger = LoggerFactory.getLogger(HealthCheckController.class);
    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/health")
    public String healthCheck() {
        logger.info("health check hit");
        return "Site is live";
    }
}
