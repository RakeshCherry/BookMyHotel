package com.bookmyhotel.BookMyHotel.Security.jwt;

import org.slf4j.LoggerFactory;

import java.util.logging.Logger;

public class JwtUtils {
    private static final Logger logger = (Logger) LoggerFactory.getLogger(JwtUtils.class);
    private String jwtSecrets;
    private int jwtExpirationTime;
}
