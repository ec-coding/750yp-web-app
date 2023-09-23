package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.dto.RegisterDto;
import com.cohortE.cohortProject.entity.User;
import com.cohortE.cohortProject.repository.UserRepository;
import com.cohortE.cohortProject.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User saveUser(RegisterDto registerDto) {
        User user = mapDtoToEntity(registerDto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String currentUserEmail = auth.getName();
        return userRepository.findByEmail(currentUserEmail).orElseThrow(() ->
                new UsernameNotFoundException("User not found for the email: " + currentUserEmail));
    }

    private User mapDtoToEntity(RegisterDto registerDto) {
        User user = new User();
        user.setFirstName(registerDto.getFirstName());
        user.setLastName(registerDto.getLastName());
        user.setEmail(registerDto.getEmail());
        user.setPassword(registerDto.getPassword());
        return user;
    }
}
