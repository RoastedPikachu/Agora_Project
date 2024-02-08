import React from 'react';
import GoBackButton from "@/shared/GoBackButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";

const Page = () => {
    return (
        <main className="relative flex flex-col justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to join the company"}/>

            <form className="grid justify-items-center grid-rows-[4] gap-y-[25px] w-[40%] max-w-[750px] h-auto">
                <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">Join the company</h2>

                <p className="mt-[-10px] text-[#2076d2] text-[1.375rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-medium">Insert your invite code <br/> and join exciting work with colleagues</p>

                <TextField type="text" label="Invite code" className="authInputMUIField"/>

                <Button variant="contained" className="credentialsAuthMUIButton mt-[10px]">Complete sign up</Button>
            </form>

            <Link href="/createCompany" className="mt-[25px]">
                <Button variant="text">Create company instead</Button>
            </Link>
        </main>
    );
};

export default Page;