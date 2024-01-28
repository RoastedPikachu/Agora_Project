import React from 'react';

const TheHeader = () => {
    return (
        <header className="relative flex items-center pl-[15%] pr-[20px] w-full h-[45px] bg-[#42a5f5]">
            <button className="flex justify-center items-center w-[35px] h-[35px]">
                <img src="/messangerPage/icons/HistoryIcon.svg" alt="" className="w-[30px] h-[30px]"/>
            </button>

            <input type="text" placeholder="Поиск Название компании" className="ml-[25px] px-[15px] w-[72.5%] h-[30px] bg-[#84c8ff] rounded-[10px] focus:border-[1px] focus:border-[#120154] placeholder-[#120154] placeholder:font-medium placeholder:text-center outline-none"/>

            <div className="flex justify-between ml-[20%] w-[95px]">
                <button className="flex justify-center items-center w-[35px] h-[35px]">
                    <img src="/messangerPage/icons/HelpIcon.svg" alt="" className="w-[30px] h-[30px]"/>
                </button>

                <button className="flex justify-center items-center w-[35px] h-[35px] bg-[#120154] rounded-[10px]">
                </button>
            </div>
        </header>
    );
};

export default TheHeader;