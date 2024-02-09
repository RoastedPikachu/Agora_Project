"use client";
import React, {useState, ChangeEvent} from 'react';

import {useRouter, useSearchParams} from 'next/navigation';

import Link from "next/link";

import {signIn} from "next-auth/react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import authStore from "@/app/store/authStore";

import firebaseSignIn from "../../firebase/auth/signIn";

interface AuthFormProps {
    isSignIn: boolean;
    authHeader: string;
    authDescription: string;
    otherChoiceText: string;
}

const AuthForm:React.FC<AuthFormProps> = ({isSignIn, authHeader, authDescription, otherChoiceText}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorEmailText, setErrorEmailText] = useState("");
    const [errorPasswordText, setErrorPasswordText] = useState("");

    const handleEmailChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrorEmailText("");
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrorPasswordText("");
        setPassword(event.target.value);
    }

    const handleSignUp = async () => {
        if(checkDataValidity()) {
            authStore.setEmail(email);
            authStore.setPassword(password);

            if(searchParams.get("inviteCode")) {
                authStore.setInviteCode(searchParams.get("inviteCode") as string);

                router.push("/joinTheCompany");
            }
            
            router.push("/createCompany");
        }
    }                                       

    const handleSignIn = async () => {
        if(checkDataValidity()) {
            let result = await firebaseSignIn(email, password);

            console.log(result);

            //document.cookie = `token=${result.result.user.accessToken}; path=/; max-age=2592000; secure=true`;

            //document.cookie = `token=${result.result.user.uid}; path=/; max-age=2592000; secure=true`;

            router.push("/messanger");
        }
    }

    const checkDataValidity = () => {
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        setErrorEmailText(!email.length ? "Field is empty" :
            email.match(emailRegEx) ? "" : "Incorrect email: expected ivanivanov@gmail.com");
        setErrorPasswordText(password.length ? "" : "Field is empty");

        return email.match(emailRegEx) && email.length && password.length;
    }

    return (
        <form className="relative w-[40%] mlarge:w-[90%] max-w-[750px] h-auto">
            <div className="relative grid justify-items-center grid-rows-[9] grid-cols-1 gap-y-[25px] mt-[30px] w-full h-full max-h-[650px]">
                <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">{authHeader}</h2>

                <p className="text-[#2076d2] text-[1.375rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-medium">{authDescription}</p>

                {isSignIn ?
                    <>
                        <Button variant="outlined" onClick={() => signIn('google')} className="googleOAuthButton">
                            <img src="/static/icon/GoogleIcon.svg" alt="Button: Sign In with Google" className="w-[25px] h-[25px]"/>

                            <p className="ml-[15px]">Continue with Google</p>
                        </Button>

                        <Button variant="contained" onClick={() => signIn('github')} className="githubOAuthButton">
                            <img src="/static/icon/GithubIcon.svg" alt="Button: Sign In with GitHub" className="ml-[-5px] w-[25px] h-[30px]"/>

                            <p className="ml-[15px]">Continue with GitHub</p>
                        </Button>
                    </> :
                    <>
                        <TextField type="text" label="Insert E-mail" required={true} inputProps={{autoComplete: 'new-password'}}  error={!!errorEmailText.length} helperText={errorEmailText} onChange={(event) => handleEmailChange(event)} className="authInputMUIField"/>

                        <TextField type="password" label="Insert password"  required={true} inputProps={{autoComplete: 'new-password'}} error={!!errorPasswordText.length} helperText={errorPasswordText} onChange={(event) => handlePasswordChange(event)} className="authInputMUIField mt-[10px]"/>

                        <Button variant="contained" onClick={() => handleSignUp()} className="credentialsAuthMUIButton mt-[10px]">Continue</Button>
                    </>
                }


                <p className="text-[#2076d2] text-[1.25rem] font-bold">OR</p>

                {isSignIn ?
                    <>
                        <TextField type="text" label="Insert E-mail" required error={!!errorEmailText.length} helperText={errorEmailText} onChange={(event) => handleEmailChange(event)} className="authInputMUIField"/>

                        <TextField type="password" label="Insert password" required error={!!errorPasswordText.length} helperText={errorPasswordText} onChange={(event) => handlePasswordChange(event)} className="authInputMUIField mt-[10px]"/>

                        <Button variant="contained" onClick={() => handleSignIn()} className="credentialsAuthMUIButton mt-[10px]">Sign in</Button>
                    </>
                    :
                    <>
                        <Button variant="outlined" onClick={() => signIn('google')} className="googleOAuthButton">
                            <img src="/static/icon/GoogleIcon.svg" alt="Button: Sign In with Google" className="w-[25px] h-[25px]"/>

                            <p className="ml-[15px]">Continue with Google</p>
                        </Button>

                        <Button variant="contained" onClick={() => signIn('github')} className="githubOAuthButton">
                            <img src="/static/icon/GithubIcon.svg" alt="Button: Sign In with GitHub" className="ml-[-5px] w-[25px] h-[30px]"/>

                            <p className="ml-[15px]">Continue with GitHub</p>
                        </Button>
                    </>
                }

                <Link href={isSignIn ? '/signUp' : '/signIn'}>
                    <Button variant="text">{otherChoiceText}</Button>
                </Link>
            </div>
        </form>
    );
};

export default AuthForm;