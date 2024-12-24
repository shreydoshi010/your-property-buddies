import React from "react";
import Image from "next/image";
import chatIcon from "@/assets/chat.png"; // Replace with the actual path to the chat icon

const ChatPopup: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-5 z-50">
      <button className="w-16 h-16 bg-[#746B3F] border-4 border-white rounded-full flex items-center justify-center">
        <div className="relative">
          {/* Chat Icon */}
          <Image
            src={chatIcon}
            alt="Chat Icon"
            width={32}
            height={32}
            className="h-8 w-8"
          />

          {/* Inner Glow Effect */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-white/60 blur-md"></div>
        </div>
      </button>
    </div>
  );
};

export default ChatPopup;
