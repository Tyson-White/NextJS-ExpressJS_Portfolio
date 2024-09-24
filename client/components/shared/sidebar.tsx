import { MessageCircleIcon, MessageCircleQuestionIcon, Newspaper } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react'

interface Props {
    className?: string;
}

const navList = [
    { name: "Посты", ref: "/posts", icon: <Newspaper className='w-[1.5rem] h-[1.5rem]]'/>},
    { name: "О сайте", ref: "/about", icon: <MessageCircleQuestionIcon className='min-w-[1.5rem] min-h-[1.5rem]]'/>},

]

const Sidebar: FC<Props> = (props) => {
  return (
    <div className='h-full pt-[4.4rem] w-[18rem] border-r border-r-white/40'>
        <ul className='px-10'>
            {navList.map((item, index) => (
                <Link href={item.ref}>
                    <li key={index} className='text-xl text-nowrap duration-150 p-[0.85rem] flex items-center border-b border-b-transparent justify-between rounded-xl gap-2 hover:px-[3.02rem] hover:shadow-md hover:bg-white'>
                        {item.name}
                        {item.icon}
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar