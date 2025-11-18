import React from 'react'
import users from '../libs/User'
import Image from 'next/image'
import Link from 'next/link'

const Message = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            <div className='w-1/3 h-[70%] bg-white rounded-xl p-5 overflow-y-scroll'>
                <input type="search" className='w-full outline-none border border-gray-400 rounded-xl py-3 px-4' placeholder='search' />
                <div className='flex flex-col gap-2 mt-5 '>
                    {
                        users.map(user =>
                            <Link href={`/message/${user?.id}`} className='bg-gray-50 flex items-center gap-4 p-2 rounded-xl' key={user.id}>
                                <Image src={user.image} alt='user image' width={500} height={500} className='size-12 rounded-full border border-green-500 p-px'></Image>
                                <p className='text-lg text-gray-700'>{user?.userName}</p>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Message
