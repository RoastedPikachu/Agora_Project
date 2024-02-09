import React from 'react';

import Link from "next/link";

import Button from "@mui/material/Button";

import GoBackButton from "@/shared/GoBackButton";
import CompanyAuthForm from "@/features/CompanyAuthForm";

const Page = () => {
    return (
        <main className="relative flex flex-col justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to join the company"}/>

            <CompanyAuthForm isCreateCompany={false} authHeader={"Join the company"} authDescription={"Insert your invite code and join exciting work with colleagues"} textFieldLabel={"Invite code"}/>

            <Link href="/createCompany" className="mt-[25px]">
                <Button variant="text">Create company instead</Button>
            </Link>
        </main>
    );
};

export default Page;