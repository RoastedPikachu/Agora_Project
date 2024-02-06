"use client";
import React from 'react';

import Link from "next/link";

import Button from "@mui/material/Button";

import {useIsMobileCheck} from "../../customHooks";

interface GoBackButtonProps {
    buttonText: string;
}

const GoBackButton:React.FC<GoBackButtonProps> = ({buttonText}) => {
    const isMobile = useIsMobileCheck();

    return (
        <Link href="/" className="absolute top-[30px] mlarge:top-[20px] left-[30px] mlarge:left-[10px]">
            <Button variant="text">
                <img src="/static/LeftArrowIcon.svg" alt="Button: jump to main page"/>

                {!isMobile && <p className="ml-[15px]">{buttonText}</p>}
            </Button>
        </Link>
    );
};

export default GoBackButton;