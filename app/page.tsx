"use client"
import React from "react";
import { VscSend } from "react-icons/vsc";
import useWebSocket, { TMessage } from "./hooks/useWebSocket";
import Image from "next/image";
import userImage from "../public/download.jpg";



export default function Page() {
  const { messages, sendMessage } = useWebSocket();

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const message = form.get("message") as string;
    // console.log("message from me", message);
    sendMessage(message);
    e.currentTarget.reset();
  }

  console.log("user messages here", messages);
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[30%] bg-gray-100 rounded-lg shadow-md border border-gray-200 min-h-[400px] p-3 flex justify-between flex-col'>
        <div>
          <Image className="size-12 rounded-full border border-blue-500 p-px" src={userImage} alt="user image" width={500} height={500}></Image>
          <div>
            {
              messages?.map((message: TMessage, index: number) =>
                <p className="text-2xl text-gray-700" key={index}>{message?.message}</p>
              )
            }
          </div>
        </div>
        <div>
          <form onSubmit={handleSendMessage} className='w-full relative'>
            <input name="message" type="text" className='appearance-none py-2 px-4 outline-none border border-blue-500 w-full rounded-lg' placeholder='Enter your message' />
            <button className="absolute right-2 cursor-pointer top-2" type="submit">
              <VscSend size={25} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
