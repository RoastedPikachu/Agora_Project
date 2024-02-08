"use client";
import React from 'react';

import Link from "next/link";

import Button from "@mui/material/Button";

import {useIsMobileCheck} from "../../customHooks";

interface GoBackButtonProps {
    designation: string;
    buttonText: string;
}

const GoBackButton:React.FC<GoBackButtonProps> = ({designation, buttonText}) => {
    const isMobile = useIsMobileCheck();

    return (
        <Link href={designation} className="absolute top-[30px] mlarge:top-[20px] left-[30px] mlarge:left-[10px]">
            <Button variant="text">
                <img src="/static/icon/LeftArrowIcon.svg" alt="Button: jump to previous page"/>

                {!isMobile && <p className="ml-[15px]">{buttonText}</p>}
            </Button>
        </Link>
    );
};

export default GoBackButton;