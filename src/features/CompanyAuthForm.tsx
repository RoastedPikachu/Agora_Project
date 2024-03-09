"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import TextField from "@mui/material/TextField";

import makeFirebaseRequest from "../../firebase/endpoints";

import { handleImageLoad } from "@/utils/generalFunctions";

import authStore from "@/app/store/authStore";

import ContainedButton from "@/shared/ContainedButton";

interface CompanyAuthFormProps {
  isCreateCompany: boolean;
  authHeader: string;
  authDescription: string;
  textFieldLabel: string;
}

const CompanyAuthForm: React.FC<CompanyAuthFormProps> = ({
  isCreateCompany,
  authHeader,
  authDescription,
  textFieldLabel,
}) => {
  const router = useRouter();

  const [companyName, setCompanyName] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  const [companyAvatar, setCompanyAvatar] = useState("");

  const completeSignUp = () => {
    if (inviteCode) {
      makeFirebaseRequest("auth/signUp/inviteCode", {
        email: authStore.email,
        password: authStore.password,
        inviteCode: inviteCode,
      });
    } else {
      makeFirebaseRequest("auth/signUp/company", {
        email: authStore.email,
        password: authStore.password,
        companyName: companyName,
        companyAvatar: companyAvatar,
      });
    }

    authStore.clearCredentials();

    router.push("/messanger");
  };

  useEffect(() => {
    if (authStore.inviteCode) {
      setInviteCode(authStore.inviteCode);
    }
  }, []);

  return (
    <form className="grid justify-items-center grid-rows-[4] gap-y-[25px] w-[45%] max-w-[750px] h-auto">
      {isCreateCompany ? (
        <div className="relative flex items-center row-span-3 w-[calc(70%+40px)] h-auto">
          <div className="relative flex w-[260px]">
            <div className="relative px-[20px] w-full h-auto">
              {companyAvatar.length ? (
                <>
                  <button
                    onClick={() => setCompanyAvatar("")}
                    className="absolute top-[-15px] right-[5px] w-[45px] h-[45px] cursor-pointer z-30"
                  >
                    <img
                      src="/static/icons/XMarkRoundedIcon.svg"
                      alt="Button: remove avatar"
                      className="w-[35px] h-[35px]"
                    />
                  </button>

                  <div className="relative mx-[10px] w-[200px] h-[200px] object-cover rounded-[10px]">
                    <img
                      src={companyAvatar}
                      alt=""
                      className="w-full h-full rounded-[10px]"
                    />
                  </div>
                </>
              ) : (
                <label
                  htmlFor="CompanyAvatar"
                  className="flex justify-center items-center mx-[10px] pb-[20px] w-[200px] h-[200px] border-4 border-dashed border-[#2076d2] rounded-[10px] text-[#2076d2] text-[8rem] cursor-pointer"
                >
                  +
                </label>
              )}

              <p className="mt-[15px] text-[#2076d2] text-[1rem] text-center font-['Kamerik']">
                {authDescription}
              </p>
            </div>
          </div>

          <h2 className="mt-[-40px] ml-[10px] text-[#2076d2] text-[2.5rem] font-['Kamerik']">
            {authHeader}
          </h2>

          <input
            type="file"
            onChange={(event) => handleImageLoad(event, setCompanyAvatar)}
            id="CompanyAvatar"
            className="hidden"
          />
        </div>
      ) : (
        <>
          <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">
            {authHeader}
          </h2>

          <p className="mt-[-10px] w-[70%] text-[#2076d2] text-[1.375rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-medium">
            {authDescription}
          </p>
        </>
      )}

      <TextField
        type="text"
        label={textFieldLabel}
        onChange={(event) =>
          isCreateCompany
            ? setCompanyName(event.target.value)
            : setInviteCode(event.target.value)
        }
        className="authInputMUIField"
      />

      <ContainedButton
        styles={"mt-[10px] mx-[15%] w-[70%] h-[50px] text-[#ffffff]"}
        text={"Complete sign up"}
        handleFunction={completeSignUp}
      />
    </form>
  );
};

export default CompanyAuthForm;
