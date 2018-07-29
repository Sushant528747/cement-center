package com.cementcenter.management.controllers;

import com.cementcenter.management.models.ui.UserCredentials;
import com.cementcenter.management.services.UserAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserAuthenticationController {

    @Autowired
    private UserAuthenticationService userAuthenticationService;

    @RequestMapping(value = "/authenticate")
    public String authenticateUser(final UserCredentials userCredentials){
        return "";
    }
}
