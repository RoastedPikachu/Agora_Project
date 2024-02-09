import React from 'react';

import Button from "@mui/material/Button";

import GoBackButton from "@/shared/GoBackButton";
import Link from "next/link";
import CompanyAuthForm from "@/features/CompanyAuthForm";

const Page = () => {
    return (
        <main className="relative flex flex-col justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to create company"}/>

            <CompanyAuthForm isCreateCompany={true} authHeader={"Create your company"} authDescription={"Upload company avatar"} textFieldLabel={"Company name"}/>

            <Link href="/joinTheCompany" className="mt-[25px]">
                <Button variant="text">Join the company instead</Button>
            </Link>
        </main>
    );
};

export default Page;