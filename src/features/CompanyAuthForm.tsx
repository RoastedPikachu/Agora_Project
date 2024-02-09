"use client";
import React, {useState, useEffect} from 'react';

import {useRouter} from 'next/navigation';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import firebaseSignUp from "../../firebase/auth/signUp";

import authStore from "@/app/store/authStore";

interface CompanyAuthFormProps {
    isCreateCompany: boolean;
    authHeader: string;
    authDescription: string;
    textFieldLabel: string;
}

const CompanyAuthForm:React.FC<CompanyAuthFormProps> = ({
    isCreateCompany,
    authHeader,
    authDescription,
    textFieldLabel
}) => {
    const router = useRouter();

    const [companyAvatar, setCompanyAvatar] = useState("");

    const handleImageLoad = (event:any) => {
        setCompanyAvatar(URL.createObjectURL(event.target.files[0]));
    }

    const completeSignUp = async (inviteCode?: string, companyName?: string) => {
        //let result = await firebaseSignUp(authStore.email, authStore.password);

        if(companyName) {

        }

        if(inviteCode) {
        }

        //console.log(result);

        authStore.clearCredentials();

         router.push("/messanger");
    }

    useEffect(() => {
       if(authStore.inviteCode) {
          completeSignUp(authStore.inviteCode);
       }
    }, []);

    return (
        <form className="grid justify-items-center grid-rows-[4] gap-y-[25px] w-[45%] max-w-[750px] h-auto">
            {isCreateCompany ?
                <div className="relative flex items-center row-span-3 w-[calc(70%+40px)] h-auto">
                    <div className="relative flex w-[260px]">
                        <div className="relative px-[20px] w-full h-auto">
                            {companyAvatar.length ?
                                <>
                                    <button onClick={() => setCompanyAvatar("")} className="absolute top-[-15px] right-[5px] w-[45px] h-[45px] cursor-pointer">
                                        <img src="/static/icon/XMarkIcon.svg" alt="Button: remove avatar" className="w-[35px] h-[35px]"/>
                                    </button>

                                    <img src={companyAvatar} alt="" className="mx-[10px] w-[200px] h-[200px] rounded-[10px]"/>
                                </>
                                :
                                <label htmlFor="CompanyAvatar" className="flex justify-center items-center mx-[10px] pb-[20px] w-[200px] h-[200px] border-4 border-dashed border-[#2076d2] rounded-[10px] text-[#2076d2] text-[8rem] cursor-pointer">+</label>
                            }

                            <p className="mt-[15px] text-[#2076d2] text-[1rem] text-center font-['Kamerik']">{authDescription}</p>
                        </div>
                    </div>

                    <h2 className="mt-[-40px] ml-[10px] text-[#2076d2] text-[2.5rem] font-['Kamerik']">{authHeader}</h2>

                    <input type="file" onChange={(event) => handleImageLoad(event)} id="CompanyAvatar" className="hidden"/>
                </div>
                :
                <>
                    <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">{authHeader}</h2>

                    <p className="mt-[-10px] w-[70%] text-[#2076d2] text-[1.375rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-medium">{authDescription}</p>
                </>
            }

            <TextField type="text" label={textFieldLabel} className="authInputMUIField"/>

            <Button variant="contained" onClick={() => completeSignUp()} className="credentialsAuthMUIButton mt-[10px]">Complete sign up</Button>
        </form>
    );
};

export default CompanyAuthForm;