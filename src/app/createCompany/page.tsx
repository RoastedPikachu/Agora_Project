"use client";
import React, {useState} from 'react';

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    const [companyAvatar, setCompanyAvatar] = useState("");

    const handleImageLoad = (event:any) => {
          setCompanyAvatar(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to create company"}/>

            <form className="grid justify-items-center w-[50%] h-auto">
                <div className="relative w-full h-[100px]">
                    <div className="relative flex w-full">
                        <div className="relative px-[20px] w-[260px] h-auto">
                            <label htmlFor="CompanyAvatar" className="flex justify-center items-center mx-[10px] pb-[20px] w-[200px] h-[200px] border-4 border-dashed border-[#2076d2] rounded-[10px] text-[#2076d2] text-[8rem] cursor-pointer">+</label>

                            <p className="mt-[20px] w-full text-[#2076d2] text-[1rem] text-center font-['Kamerik']">Upload company avatar</p>
                        </div>

                        <h2 className="ml-[10px] text-[#2076d2] text-[2.5rem] font-['Kamerik']">Create your <br/> company</h2>
                    </div>

                    <input type="file" onChange={(event) => handleImageLoad(event)} id="CompanyAvatar" className="hidden"/>
                </div>
            </form>
        </main>
    );
};

export default Page;