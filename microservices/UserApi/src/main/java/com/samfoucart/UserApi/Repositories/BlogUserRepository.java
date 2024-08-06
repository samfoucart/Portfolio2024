package com.samfoucart.UserApi.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.samfoucart.UserApi.Entities.BlogUser;

public interface BlogUserRepository extends PagingAndSortingRepository<BlogUser, Long>,
    CrudRepository<BlogUser, Long> {
    
}
