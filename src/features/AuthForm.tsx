"use client";
import React, {useState} from 'react';

import {useRouter} from 'next/navigation';

import Link from "next/link";

import {signIn} from "next-auth/react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import firebaseSignUp from "../../firebase/auth/signUp";
import firebaseSignIn from "../../firebase/auth/signIn";

interface AuthFormProps {
    isSignIn: boolean;
    authHeader: string;
    authDescription: string;
    otherChoiseText: string;
}

const AuthForm:React.FC<AuthFormProps> = ({isSignIn, authHeader, authDescription, otherChoiseText}) => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        let result = await firebaseSignUp(email, password);

        console.log(result);

        router.push("/signIn");
    }

    const handleSignIn = async () => {
        let result = await firebaseSignIn(email, password);

        console.log(result);

        router.push("/messanger");
    }

    return (
        <form className="relative w-[40%] mlarge:w-[90%] max-w-[750px] h-auto">
            <div className="relative grid justify-items-center grid-rows-[10] grid-cols-1 gap-y-[25px] w-full h-full">
                <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">{authHeader}</h2>

                <p className="text-[#2076d2] text-[1.375rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-medium">{authDescription}</p>

                {isSignIn ?
                    <>
                        <Button variant="outlined" onClick={() => signIn('google')} className="googleOAuthButton">
                            <img src="/static/GoogleIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                            <p className="ml-[15px]">Continue with Google</p>
                        </Button>

                        <Button variant="contained" onClick={() => signIn('github')} className="githubOAuthButton">
                            <img src="/static/GithubIcon.svg" alt="" className="ml-[-5px] w-[25px] h-[30px]"/>

                            <p className="ml-[15px]">Continue with GitHub</p>
                        </Button>
                    </> :
                    <>
                        <TextField type="text" label="Insert E-mail" onChange={(event) => setEmail(event.target.value)} className="authInputMUIField"/>

                        <TextField type="password" label="Insert password" onChange={(event) => setPassword(event.target.value)} className="authInputMUIField"/>

                        <Button variant="contained" onClick={() => handleSignUp()} className="flex justify-center items-center mx-[15%] mlarge:mx-[5%] w-[70%] mlarge:w-[80%] h-[50px] bg-[#2076d2] rounded-[5px] text-[1.25rem] font-bold">Continue</Button>
                    </>
                }


                <p className="text-[#2076d2] text-[1.25rem] font-bold">OR</p>

                {isSignIn ?
                    <>
                        <TextField type="text" label="Insert E-mail" onChange={(event) => setEmail(event.target.value)} className="authInputMUIField"/>

                        <TextField type="password" label="Insert password" onChange={(event) => setPassword(event.target.value)} className="authInputMUIField"/>

                        <Button variant="contained" onClick={() => handleSignIn()} className="flex justify-center items-center mx-[15%] mlarge:mx-[5%] w-[70%] mlarge:w-[80%] h-[50px] bg-[#2076d2] rounded-[5px] text-[1.25rem] font-bold">Sign in</Button>
                    </>
                    :
                    <>
                        <Button variant="outlined" onClick={() => signIn('google')} className="googleOAuthButton">
                            <img src="/static/GoogleIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                            <p className="ml-[15px]">Continue with Google</p>
                        </Button>

                        <Button variant="contained" onClick={() => signIn('github')} className="githubOAuthButton">
                            <img src="/static/GithubIcon.svg" alt="" className="ml-[-5px] w-[25px] h-[30px]"/>

                            <p className="ml-[15px]">Continue with GitHub</p>
                        </Button>
                    </>
                }

                <Link href={isSignIn ? '/signUp' : '/signIn'}>
                    <Button variant="text">{otherChoiseText}</Button>
                </Link>
            </div>
        </form>
    );
};

export default AuthForm;