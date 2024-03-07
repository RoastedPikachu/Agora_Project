"use client";
import React, {useState, useEffect} from 'react';

import {useRouter} from "next/navigation";

import firebase from "firebase/compat/app";

import {auth} from "../../firebase/config";

import makeFirebaseRequest from "../../firebase/endpoints";

import {handleFirebaseSuccess, handleFirebaseError, handleImageLoad} from "@/lib/generalFunctions";

import authStore from "@/app/store/authStore";
import modalWindowsStore from "@/app/store/modalWindowsStore";

import DataSnapshot = firebase.database.DataSnapshot;

const ProfileModalWindow = () => {
    const router = useRouter();

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
            color: "bg-[#ffa726]",
            name: "Not available",
            isCurrent: false,
        },
        {
            id: 3,
            code: 30,
            color: "bg-[#d32f2f]",
            name: "Offline",
            isCurrent: false,
        }
    ]);

    const [userName, setUserName] = useState("");

    const changeUserAvatar = (imagePath: string) => {
        makeFirebaseRequest("user/update/avatar", {userId: auth.currentUser?.uid, avatarPath: imagePath});
    }

    const changeUserStatus = (statusCode: number) => {
        makeFirebaseRequest("user/update/status", {userId: auth.currentUser?.uid, statusCode: statusCode});
    }

    const getUserName = async () => {
        const result = await makeFirebaseRequest("user/get", {userId: auth.currentUser?.uid}) as unknown as DataSnapshot;

        setUserName(result.val().displayName);
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                authStore.signOut();
                
                handleFirebaseSuccess("Successful sign out");

                router.push("/");
            })
            .catch((error: any) => {
                handleFirebaseError("Error during sign out: ", error);
            })
    }

    useEffect(() => {
        getUserName();
    }, []);

    return (
        <div className="absolute top-[51px] right-0 pt-[20px] pb-[5px] w-[300px] h-auto bg-[#ffffff] border-2 border-[#e5e8eb] rounded-[10px] z-30">
            <div className="relative flex items-center mx-[25px] w-[100%] h-[50px]">
                <img src="/static/messangerPage/icons/DefaultAvatarIcon.svg" alt="" className="row-span-2 w-[40px] h-[40px] bg-[#747474] rounded-[7.5px]"/>

                <div className="grid items-center grid-rows-2 grid-cols-1 ml-[15px]">
                    <h4 className="text-[#0d141c] text-[1.125rem] font-bold">{userName}</h4>

                    <div className="flex items-center">
                        <div className={`w-[12.5px] h-[12.5px] rounded-[50%] ${statuses.find(status => status.isCurrent)?.color}`}></div>

                        <p className="ml-[10px] text-[#4f7396] text-[1rem] font-normal">{statuses.find(status => status.isCurrent)?.name}</p>
                    </div>
                </div>
            </div>

            <button onClick={() => changeUserStatus(20)} className="mx-[25px] h-[50px] bg-transparent border-none text-[#4f7396] text-left font-medium">Set yourself as <b>not available</b></button>

            <button onClick={() => modalWindowsStore.changeInviteCodeModalOpened()} className="mx-[25px] h-[40px] bg-transparent border-none text-[#4f7396] text-left font-medium">Generate <b>invite code</b></button>

            {/* Next 2 html elements for user avatar change */}

            <label htmlFor="UserAvatar" className="flex items-center mx-[25px] h-[50px] bg-transparent border-none text-[#4f7396] text-left font-semibold cursor-pointer">Change avatar</label>

            <input type="file" onChange={(event) => handleImageLoad(event, changeUserAvatar)} id="CompanyAvatar" className="hidden"/>

            <button onClick={() => signOut()} className="px-[25px] w-full h-[50px] bg-transparent border-t-2 border-[#e5e8eb] text-[#4f7396] text-left font-medium">Sign out of Agora</button>
        </div>
    );
};

export default ProfileModalWindow;