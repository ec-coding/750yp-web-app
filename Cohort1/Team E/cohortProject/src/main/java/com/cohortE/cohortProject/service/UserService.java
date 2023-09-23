package com.cohortE.cohortProject.service;

import com.cohortE.cohortProject.dto.RegisterDto;
import com.cohortE.cohortProject.entity.User;

public interface UserService {

    User saveUser(RegisterDto registerDto);
    User getCurrentUser();
}
