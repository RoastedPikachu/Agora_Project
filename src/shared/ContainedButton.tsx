"use client";
import React from 'react';

interface ContainedButtonProps {
    styles: string;
    text: string;
    handleFunction?: () => void;
    children?: any;
}

const ContainedButton:React.FC<ContainedButtonProps> = ({styles, text, handleFunction, children}) => {
    return (
        <button type="button" onClick={() => handleFunction ? handleFunction() : null} className={`${styles} flex justify-center items-center bg-[#2076d2] hover:bg-[#1a5ce5] rounded-[10px] hover:drop-shadow-sm duration-300 ease-in-out text-[1.125rem] font-['Space_Grotesk'] font-semibold`}>
            {children}

            <p>{text}</p>
        </button>
    );
};

export default ContainedButton;