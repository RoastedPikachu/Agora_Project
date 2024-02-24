"use client";
import React, {useState} from 'react';

import {useRouter} from "next/navigation";

import authStore from "@/app/store/authStore";

import Button from "@mui/material/Button";

const GreetingsBlock = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");

    const goToSignUpPage = () => {
        authStore.setEmail(email);

        setEmail("");

        router.push("/signUp");
    }

    return (
        <section className="relative px-[10%] w-full h-[580px]">
            <div className="mt-[50px] px-[50px] py-[30px] w-full h-[580px] bg-[url('/static/mainPage/GreetingsBackgroundImage.png')] bg-cover rounded-[20px]">
                <h1 className="pt-[170px] w-full text-[#ffffff] text-[4rem] text-left font-bold leading-[1.25] z-20">Agora is a new professional messaging service.</h1>

                <p className="mt-[20px] text-[#ffffff] text-[2rem] font-light">The best corporate messanger which made by people and for people</p>

                <div className="flex items-center mt-[30px] pl-[30px] pr-[10px] w-[460px] h-[60px] bg-[#ffffff] rounded-[15px]">
                    <input type="text" placeholder="Enter your work email" onChange={(event) => setEmail(event.target.value)} className="w-[380px] h-full placeholder:text-[#4f7396] text-[1.125rem] outline-0"/>

                    <Button variant="contained" onClick={() => goToSignUpPage()} className="w-[180px] h-[45px] bg-[#2076d2] rounded-[10px] font-semibold">Get started</Button>
                </div>
            </div>
        </section>
    );
};

export default GreetingsBlock;