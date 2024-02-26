"use client";
import React, {useState} from 'react';

const MessangerSidebar = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            isActive: true,
            name: "All"
        },
        {
            id: 2,
            isActive: false,
            name: "Unread"
        },
        {
            id: 3,
            isActive: false,
            name: "Mentions"
        },
        {
            id: 4,
            isActive: false,
            name: "Saved"
        },
        {
            id: 5,
            isActive: false,
            name: "More"
        },
    ])

    const changeActiveCategory = (targetId: number) => {
        setCategories(categories.map((category) => category.id === targetId ? {...category, isActive: true} : {...category, isActive: false}));
    }

    return (
        <aside className="relative px-[50px] py-[30px] w-[20%] h-[calc(100vh-65px)] border-r-2 border-[#e5e8eb]">
            <div className="grid justify-items-start grid-rows-[6] grid-cols-1 gap-y-[15px] h-auto">
                <h2 className="text-[#0d141c] text-[1.75rem] font-bold">Channels</h2>

                {categories.map(category => (
                    <button key={category.id}
                            onClick={() => changeActiveCategory(category.id)}
                            className={`${category.isActive ? `w-full bg-[#e5e8eb] rounded-[10px]` : ""} flex items-center px-[20px] h-[50px]`}
                    >
                        <img src="/static/messangerPage/icons/ChatIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                        <p className="ml-[20px] text-[#0d141c] text-[1.375rem] text-left font-semibold">{category.name}</p>
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default MessangerSidebar;