"use client";
import React, {useState} from 'react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    const [companyAvatar, setCompanyAvatar] = useState("");

    const handleImageLoad = (event:any) => {
          setCompanyAvatar(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to create company"}/>

            <form className="grid justify-items-center grid-rows-5 gap-y-[25px] w-[40%] max-w-[750px] h-auto">
                <div className="relative flex items-center row-span-3 w-[calc(70%+40px)] h-auto">
                    <div className="relative flex w-[260px]">
                        <div className="relative px-[20px] w-full h-auto">
                            {companyAvatar.length ?
                                <>
                                    <button onClick={() => setCompanyAvatar("")} className="absolute top-[-15px] right-[5px] w-[45px] h-[45px] cursor-pointer">
                                        <img src="/static/XMarkIcon.svg" alt="Button: remove avatar" className="w-[35px] h-[35px]"/>
                                    </button>

                                    <img src={companyAvatar} alt="" className="mx-[10px] w-[200px] h-[200px] rounded-[10px]"/>
                                </>
                                :
                                <label htmlFor="CompanyAvatar" className="flex justify-center items-center mx-[10px] pb-[20px] w-[200px] h-[200px] border-4 border-dashed border-[#2076d2] rounded-[10px] text-[#2076d2] text-[8rem] cursor-pointer">+</label>
                            }

                            <p className="mt-[15px] text-[#2076d2] text-[1rem] text-center font-['Kamerik']">Upload company avatar</p>
                        </div>
                    </div>

                    <h2 className="mt-[-40px] ml-[10px] text-[#2076d2] text-[2.5rem] font-['Kamerik']">Create your <br/> company</h2>

                    <input type="file" onChange={(event) => handleImageLoad(event)} id="CompanyAvatar" className="hidden"/>
                </div>

                <TextField type="text" label="Company name" className="authInputMUIField"/>

                <Button variant="contained" className="credentialsAuthMUIButton mt-[-5px]">Complete sign up</Button>
            </form>
        </main>
    );
};

export default Page;