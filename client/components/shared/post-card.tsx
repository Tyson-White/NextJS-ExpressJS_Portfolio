import { PostCardProps } from '@/types/post';
import { Eye, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'



const PostCard: FC<PostCardProps> = (props) => {
    const { url, title, preview, tags, time, views, content } = props;
  return (
    <Link href={'/posts/' + url}>
        <div className='relative w-full h-[30rem] overflow-hidden border border-white rounded-xl group bg-[#fff] shadow-md'>
            <div className="relative z-0 duration-200 w-full h-[60%] group-hover:h-[30rem] group-hover:opacity-[0.4]">
                <Image src={preview} fill objectFit='cover' alt='image'/>
            </div>
            <p className="absolute top-5 left-5">{content[0].text}</p>
            <div className="h-[30%] px-10 mt-[1.25rem] flex flex-col justify-between">
                <h2 className='text-2xl'>{title}</h2>
                <ul className='flex items-center gap-3'>
                    {tags.map((el) => (
                        <li key={el.id} className='px-5 flex items-center h-[2.05rem] border shadow-md border-violet-800 text-black rounded-md bg-violet-600'>{el.text}</li>
                    ))}
                </ul>
                <div className="flex items-center justify-between">
                    <span className='text-gray-400'>Опубликовано: {time.created}</span>
                    <span className='flex items-center gap-2'>{views}<Eye className='translate-y-[-1px] w-[1.25rem] h-[1.25rem]'/></span>
                </div>
            </div>

            <MoveRight color={"#fff"} className='absolute duration-200 bottom-[2rem] right-[7rem] w-[2.25rem] h-[2.25rem] z-1 opacity-0 group-hover:right-[3rem] group-hover:opacity-[1]'/>
        </div>
    </Link>
  )
}

export default PostCard