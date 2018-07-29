package com.cementcenter.management.configurations;

import com.cementcenter.management.commons.JwtTokenUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.cementcenter.management.commons.ApplicationConstants.API;
import static com.cementcenter.management.commons.ApplicationConstants.TRUE;

public class JwtAuthenticationFilter extends GenericFilterBean {


    private static Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {

        final HttpServletRequest request = (HttpServletRequest) servletRequest;
        final HttpServletResponse response = (HttpServletResponse) servletResponse;
        final String authHeader = request.getHeader("Authorization");
        final String noAuthHeader = request.getHeader("No-Auth");

        if ((noAuthHeader != null && TRUE.equals(noAuthHeader)) || !request.getRequestURI().contains(API)) {
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                LOGGER.error("Missing or invalid Authorization header");
                throw new ServletException("Missing or invalid Authorization header");
            }

            final String token = authHeader.substring(7);
            final String requestingIP = request.getRemoteAddr();

            boolean isValidToken = JwtTokenUtils.isValidToken(requestingIP, token);

            if (!isValidToken) {
                LOGGER.error("Invalid Token");
                throw new ServletException("Invalid token.");
            }
            filterChain.doFilter(servletRequest, servletResponse);
        }
    }
}
