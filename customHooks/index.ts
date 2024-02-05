"use client";
import React, {useState, useEffect} from 'react';

export const useIsMobileCheck = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 480px)").matches)
    }, []);

    return isMobile;
}