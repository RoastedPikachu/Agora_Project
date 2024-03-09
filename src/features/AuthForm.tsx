"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import authStore from "@/app/store/authStore";

import makeFirebaseRequest from "../../firebase/endpoints";

import ContainedButton from "@/shared/ContainedButton";
import OutlinedButton from "@/shared/OutlinedButton";

interface AuthFormProps {
  isSignIn: boolean;
  authHeader: string;
  authDescription: string;
  otherChoiceText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isSignIn,
  authHeader,
  authDescription,
  otherChoiceText,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorNameText, setErrorNameText] = useState("");
  const [errorEmailText, setErrorEmailText] = useState("");
  const [errorPasswordText, setErrorPasswordText] = useState("");

  const handleNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setErrorNameText("");
    setName(event.target.value);
  };

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setErrorEmailText("");
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setErrorPasswordText("");
    setPassword(event.target.value);
  };

  const handleSignUp = async () => {
    if (checkDataValidity()) {
      authStore.setName(name);
      authStore.setEmail(email);
      authStore.setPassword(password);

      if (searchParams.get("inviteCode")) {
        authStore.setInviteCode(searchParams.get("inviteCode") as string);

        router.push("/joinTheCompany");
      }

      router.push("/createCompany");
    }
  };

  const handleGoogleSignIn = () => {
    makeFirebaseRequest("auth/googleSignIn", {});
  };

  const handleGithubSignIn = () => {
    makeFirebaseRequest("auth/gitHubSignIn", {});
  };

  const handleSignIn = async () => {
    if (checkDataValidity()) {
      makeFirebaseRequest("auth/signIn", { email: email, password: password });

      router.push("/messanger");
    }
  };

  const checkDataValidity = () => {
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setErrorNameText(name.length ? "" : "Field is empty");
    setErrorEmailText(
      !email.length
        ? "Field is empty"
        : email.match(emailRegEx)
        ? ""
        : "Incorrect email: expected ivanivanov@gmail.com",
    );
    setErrorPasswordText(password.length ? "" : "Field is empty");

    return email.match(emailRegEx) && email.length && password.length;
  };

  useEffect(() => {
    if (authStore.email.length) {
      setEmail(authStore.email);
    }
  }, []);

  return (
    <form className="relative w-[40%] mlarge:w-[90%] max-w-[750px] h-auto">
      <div className="relative grid justify-items-center grid-rows-[10] grid-cols-1 gap-y-[25px] mt-[30px] w-full h-full max-h-[700px]">
        <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">
          {authHeader}
        </h2>

        <p className="text-[#2076d2] text-[1.375rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-medium">
          {authDescription}
        </p>

        {isSignIn ? (
          <>
            <OutlinedButton
              styles={"mx-[15%] w-[70%] h-[50px] text-[#2076d2]"}
              text={"Continue with Google"}
              handleFunction={handleGoogleSignIn}
            >
              <img
                src="/static/icons/GoogleIcon.svg"
                alt="Button: Sign In with Google"
                className="mr-[15px] w-[25px] h-[25px]"
              />
            </OutlinedButton>

            <ContainedButton
              styles={
                "mx-[15%] w-[70%] h-[50px] !bg-[#000000] !hover:bg-[#111111] text-[#ffffff]"
              }
              text={"Continue with GitHub"}
              handleFunction={handleGithubSignIn}
            >
              <img
                src="/static/icons/GithubIcon.svg"
                alt="Button: Sign In with GitHub"
                className="ml-[-5px] mr-[15px] w-[25px] h-[30px]"
              />
            </ContainedButton>
          </>
        ) : (
          <>
            <TextField
              type="text"
              label="Enter Name and Surname"
              required={true}
              inputProps={{ autoComplete: "new-password" }}
              error={!!errorNameText.length}
              helperText={errorNameText}
              onChange={(event) => handleNameChange(event)}
              className="authInputMUIField"
            />

            <TextField
              type="text"
              label="Enter E-mail"
              required={true}
              inputProps={{ autoComplete: "new-password" }}
              error={!!errorEmailText.length}
              helperText={errorEmailText}
              onChange={(event) => handleEmailChange(event)}
              value={email}
              className="authInputMUIField"
            />

            <TextField
              type="password"
              label="Enter password"
              required={true}
              inputProps={{ autoComplete: "new-password" }}
              error={!!errorPasswordText.length}
              helperText={errorPasswordText}
              onChange={(event) => handlePasswordChange(event)}
              className="authInputMUIField"
            />

            <ContainedButton
              styles={"mt-[10px] mx-[15%] w-[70%] h-[50px] text-[#ffffff]"}
              text={"Continue"}
              handleFunction={handleSignUp}
            />
          </>
        )}

        <p className="text-[#2076d2] text-[1.25rem] font-bold">OR</p>

        {isSignIn ? (
          <>
            <TextField
              type="text"
              label="Insert E-mail"
              required
              error={!!errorEmailText.length}
              helperText={errorEmailText}
              onChange={(event) => handleEmailChange(event)}
              className="authInputMUIField"
            />

            <TextField
              type="password"
              label="Insert password"
              required
              error={!!errorPasswordText.length}
              helperText={errorPasswordText}
              onChange={(event) => handlePasswordChange(event)}
              className="authInputMUIField mt-[10px]"
            />

            <ContainedButton
              styles={"mt-[10px] mx-[15%] w-[70%] h-[50px] text-[#ffffff]"}
              text={"Sign in"}
              handleFunction={handleSignIn}
            />
          </>
        ) : (
          <>
            <OutlinedButton
              styles={"mx-[15%] w-[70%] h-[50px] text-[#2076d2]"}
              text={"Continue with Google"}
              handleFunction={handleGoogleSignIn}
            >
              <img
                src="/static/icons/GoogleIcon.svg"
                alt="Button: Sign In with Google"
                className="mr-[15px] w-[25px] h-[25px]"
              />
            </OutlinedButton>

            <ContainedButton
              styles={
                "mx-[15%] w-[70%] h-[50px] !bg-[#000000] !hover:bg-[#111111] text-[#ffffff]"
              }
              text={"Continue with GitHub"}
              handleFunction={handleGithubSignIn}
            >
              <img
                src="/static/icons/GithubIcon.svg"
                alt="Button: Sign In with GitHub"
                className="ml-[-5px] mr-[15px] w-[25px] h-[30px]"
              />
            </ContainedButton>
          </>
        )}

        <Link href={isSignIn ? "/signUp" : "/signIn"}>
          <Button variant="text">{otherChoiceText}</Button>
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
