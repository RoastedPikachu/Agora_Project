"use client";
import React from 'react';

interface AdvantageProps {
    id: number;
    iconPath: string;
    title: string;
    description: string;
}

const Advantage:React.FC<AdvantageProps> = ({id, iconPath, title, description}) => {
    return (
        <div key={id} className="p-[20px] w-[32%] h-full border-2 border-[#e5e8eb] rounded-[10px]">
            <img src={iconPath} alt="" className="w-[25px] h-[25px]"/>

            <h3 className="mt-[15px] text-[#0d141c] text-[1.25rem] font-bold">{title}</h3>

            <p className="mt-[10px] w-[90%] text-[#4f7396] text-[1rem] font-medium">{description}</p>
        </div>
    );
};

export default Advantage;