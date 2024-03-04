import React from 'react';

interface OutlinedButtonProps {
    styles: string;
    text: string;
    handleFunction?: () => void;
    children?: any;
}

const OutlinedButton:React.FC<OutlinedButtonProps> = ({styles, text, handleFunction, children}) => {
    return (
        <button onClick={() => handleFunction ? handleFunction : null} className={`${styles} flex justify-center items-center bg-transparent border-2 border-[#2076d2] rounded-[10px] hover:drop-shadow-sm text-[#2076d2] text-[1.125rem] duration-300 ease-in-out font-['Space_Grotesk'] font-semibold`}>
            {children}

            <p>{text}</p>
        </button>
    );
};

export default OutlinedButton;