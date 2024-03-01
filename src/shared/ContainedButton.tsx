import React from 'react';

interface ContainedButtonProps {
    styles: string;
    text: string;
    handleFunction?: () => void;
}

const ContainedButton:React.FC<ContainedButtonProps> = ({styles, text, handleFunction}) => {
    return (
        <button onClick={() => handleFunction ? handleFunction : null} className={`${styles} bg-[#2076d2] hover:bg-[#1a5ce5] rounded-[10px] hover:drop-shadow-sm text-[#ffffff] text-[1.125rem] duration-300 ease-in-out font-semibold`}>
            {text}
        </button>
    );
};

export default ContainedButton;