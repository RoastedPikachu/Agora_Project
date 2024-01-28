import React from 'react';

const MessangerSidebar = () => {
    return (
        <aside className="relative w-[19%] h-full bg-[#90caf9]">
            <div className="flex justify-between items-center mt-[20px] px-[20px]">
                <h3 className="text-[#120154] text-[1.125rem] font-bold">Название компании</h3>

                <button className="flex justify-center items-center w-[40px] h-[40px] bg-[#120154] rounded-[50px]">
                    <img src="/static/messangerPage/icons/HmmIcon.svg" alt=""/>
                </button>
            </div>

            <div className="flex items-center mt-[50px] px-[20px]">
                <button className="flex justify-center items-center w-[40px] h-[30px]">
                    <img src="/static/messangerPage/icons/ToggleArrowIcon.svg" alt="" className="w-[30px] h-[20px]"/>
                </button>

                <h3 className="ml-[20px] text-[#120154] text-[1.125rem] font-bold">Чаты</h3>
            </div>

            <ul className="mt-[20px] px-[45px] list-['#']">
                <li className="mt-[10px] px-[15px] text-[#120154] text-[1.125rem] font-bold">Чат1</li>

                <li className="mt-[10px] px-[15px] text-[#120154] text-[1.125rem] font-bold">Чат2</li>

                <li className="mt-[10px] px-[15px] text-[#120154] text-[1.125rem] font-bold">Чат3</li>
            </ul>

            <div className="flex items-center mt-[30px] px-[20px]">
                <button className="flex justify-center items-center w-[40px] h-[40px] bg-[#120154] rounded-[5px] text-[#90caf9] text-[1.75rem] font-bold">+</button>

                <h3 className="ml-[20px] text-[#120154] text-[1.125rem] font-bold">Создать новый</h3>
            </div>

            <div className="absolute flex items-center bottom-[20px] px-[20px]">
                <h3 className="">CanalName</h3>

                <button className="">Начать звонок</button>
            </div>
        </aside>
    );
};

export default MessangerSidebar;