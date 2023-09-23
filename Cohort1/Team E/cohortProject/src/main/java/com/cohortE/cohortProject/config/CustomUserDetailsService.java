package com.cohortE.cohortProject.config;

import com.cohortE.cohortProject.entity.User;
import com.cohortE.cohortProject.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User authorizedUser = userRepository.findByEmail(login)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found for the email: " + login)
                );

        return new org.springframework.security.core.userdetails.User(
                authorizedUser.getEmail(),
                authorizedUser.getPassword(),
                new ArrayList<>()
        );
    }
}
