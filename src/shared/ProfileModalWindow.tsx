"use client";
import React, {useState} from 'react';

import {auth} from "../../firebase/config";

const ProfileModalWindow = () => {
    const [statuses, setStatuses] = useState([
        {
            id: 1,
            code: 10,
            color: "bg-[#388e3c]",
            name: "Active",
            isCurrent: true,
        },
        {
            id: 2,
            code: 20,
            color: "bg-[#d32f2f]",
            name: "Active",
            isCurrent: false,
        },
        {
            id: 3,
            code: 30,
            color: "bg-[#ffa726]",
            name: "Active",
            isCurrent: false,
        }
    ])

    const signOut = () => {
        auth.signOut()
            .then(() => {
                alert("Successful sign out");
            })
            .catch(error => {
                alert("Error signing out");
            })
    }

    return (
        <div className="absolute top-[51px] right-0 py-[20px] w-[300px] h-[180px] bg-[#ffffff] border-2 border-[#e5e8eb] rounded-[10px] z-30">
            <div className="relative flex items-center mx-[25px] w-[100%] h-[50px]">
                <img src="" alt="" className="row-span-2 w-[40px] h-[40px] bg-[#747474] rounded-[7.5px]"/>

                <div className="grid items-center grid-rows-2 grid-cols-1 ml-[15px]">
                    <h4 className="text-[#0d141c] text-[1.125rem] font-bold">Boris Karabut</h4>

                    <div className="flex items-center">
                        <div className={`w-[12.5px] h-[12.5px] rounded-[50%] ${statuses.find(status => status.isCurrent)?.color}`}></div>

                        <p className="ml-[10px] text-[#4f7396] text-[1rem] font-normal">{statuses.find(status => status.isCurrent)?.name}</p>
                    </div>
                </div>
            </div>

            <button onClick={() => setStatuses(statuses.map(status => status.code === 20 ? {...status, isCurrent: true} : {...status, isCurrent: false}))} className="mx-[25px] h-[50px] bg-transparent border-none text-[#4f7396] text-left font-medium">Set yourself as <b>not available</b></button>

            <button onClick={() => signOut()} className="px-[25px] w-full h-[50px] bg-transparent border-t-2 border-[#e5e8eb] text-[#4f7396] text-left font-medium">Sign out of Agora</button>
        </div>
    );
};

export default ProfileModalWindow;