package com.samfoucart.UserApi.Controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.samfoucart.UserApi.Entities.BlogUser;
import com.samfoucart.UserApi.Repositories.BlogUserRepository;

@RestController
public class BlogUserController {
    private final BlogUserRepository userRepository;
    private final Logger logger = LoggerFactory.getLogger(BlogUserController.class);

    BlogUserController(BlogUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/users")
    @CrossOrigin(origins = {"http://localhost:5173/"})
    List<BlogUser> all() {
        // logger.info("users endpoint hit");
        return (List<BlogUser>) userRepository.findAll();
    }
}
