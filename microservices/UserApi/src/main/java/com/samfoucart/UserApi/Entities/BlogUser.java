package com.samfoucart.UserApi.Entities;

import java.util.Date;
import java.util.UUID;

import org.springframework.lang.NonNull;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity()
@Table(name = "blog_user")
public class BlogUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    @NonNull
    private Long userId;

    @Column(name = "user_name")
    @NonNull
    private String userName;

    @Column(name = "signed_up_timestamp")
    @NonNull
    private Date signedUpAt;

    @Column(name = "is_active")
    @NonNull
    private Boolean isActive;

    @Column(name = "modified_timestamp")
    @NonNull
    private Date modifiedAt;

    @Column(name = "row_id")
    @NonNull
    private UUID rowId;
}
