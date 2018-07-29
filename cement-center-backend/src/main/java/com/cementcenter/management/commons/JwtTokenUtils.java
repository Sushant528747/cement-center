package com.cementcenter.management.commons;

public interface JwtTokenUtils {
    static boolean isValidToken(String requestingIP, String token) {
        return false;
    }
}
