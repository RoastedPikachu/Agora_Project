import React from "react";

import chatsStore from "@/app/store/chatsStore";

import Message from "../../entities/Message";

const MessageSpace = () => {
  return (
    <div className="relative w-full h-[calc(100vh-160px)]">
      {chatsStore.currentChat.messages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          author={{
            uid: message.author.uid,
            avatarPath: message.author.avatarPath,
            name: message.author.name,
          }}
          sendTime={message.sendTime}
          text={message.text}
        />
      ))}
    </div>
  );
};

export default MessageSpace;
