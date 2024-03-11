"use client";
import React from "react";

import { Author } from "@/utils/generalInterfaces";

interface MessageProps {
  authorAvatar: string;
  author: Author;
  sendDate: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ author, sendDate, text }) => {
  return (
    <div>
      <div>
        <img
          src="/static/messangerPage/icons/DefaultAvatarIcon.svg"
          alt=""
          className=""
        />

        <span className="">
          <p className="">{author.name}</p>

          <p className="">{sendDate}</p>
        </span>
      </div>

      <p className="">{text}</p>
    </div>
  );
};

export default Message;
