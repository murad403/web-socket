"use client";

import useWebSocket from "@/app/hooks/useWebSocket";
import users from "@/app/libs/User";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { VscSend } from "react-icons/vsc";

const UserMessage = () => {
    const {userId} = useParams();
    const currentTargetUser = users.find(user => user.id === userId);
    console.log(currentTargetUser);
    const router = useRouter();
    const { messages, sendMessage } = useWebSocket();

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const message = form.get("message") as string;
        // console.log("message from me", message);
        sendMessage(message);
        e.currentTarget.reset();
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            <div className='w-1/3 h-[70%] bg-white rounded-xl p-5 overflow-y-scroll relative'>
                <button onClick={() => router.back()} className="hover:text-blue-500 cursor-pointer">
                    <IoMdArrowBack size={25} />
                </button>
                <div className="flex items-center gap-1 mt-5">
                    <Image alt="target user" src={currentTargetUser?.image} className="size-10 rounded-full border border-blue-500 p-px" width={500} height={500}></Image>
                    <p className="text-sm font-semibold text-gray-700">message</p>
                </div>
                <div className="absolute w-[90%] bottom-7">
                    <form onSubmit={handleSendMessage} className="relative">
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

export default UserMessage
