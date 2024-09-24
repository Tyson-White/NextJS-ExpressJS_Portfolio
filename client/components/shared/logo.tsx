'use client'

import { BookOpen, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react'

interface Props {
    className?: string;
}

export const Logo: FC<Props> = (props) => {

    const router = useRouter()

    return (
        <div onClick={() => router.push('/posts')} className='flex items-center gap-3 w-[11.5rem] relative group'>
            <BookOpen />
            <span className='absolute flex items-center gap-1 duration-150 opacity-0 right-[3.8rem] -translate-x-[2rem] z-1 text-1xl cursor-pointer group-hover:-translate-x-[0] group-hover:opacity-[1]'>To Home <ChevronRight className='w-[1.25rem] h-[1.25rem]'/></span>
            <span className='text-1xl duration-150 cursor-pointer group-hover:opacity-0 group-hover:-translate-x-[-2rem]'>My Portfolio</span>
        </div>
    )
}

export default Logo