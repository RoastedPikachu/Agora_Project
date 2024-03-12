"use client";
import React from "react";

import { Author } from "@/utils/generalInterfaces";

interface MessageProps {
  id: number;
  author: Author;
  sendTime: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ id, author, sendTime, text }) => {
  return (
    <div className="relative px-[20px] py-[15px] w-[60%] h-auto">
      {id !== 1 && (
        <div className="relative">
          <img
            src={author.avatarPath}
            alt=""
            className="w-[40px] h-[40px] rounded-[7.5px]"
          />

          <p className="text-[#2076d2] text-[1.25rem] font-medium">
            {author.name}
          </p>
        </div>
      )}

      <p className="w-[calc(100%-50px)] text-[#0d140c] text-[1.25rem] font-medium">
        {text}
      </p>

      <p className="absolute bottom-[5px] right-0 text-[#2076d2] text-[1.25rem] font-medium">
        {sendTime}
      </p>
    </div>
  );
};

export default Message;
