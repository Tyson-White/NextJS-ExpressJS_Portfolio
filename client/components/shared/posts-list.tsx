import React, { FC } from 'react'
import PostCard from '@/components/shared/post-card';
import { PostCardProps } from '@/types/post';

interface Props {
    className?: string;
    list: PostCardProps[]
}


const PostsList: FC<Props> = ({ list }) => {
    console.log(list)
  return (
    <ul className='flex flex-col gap-10'>
        {list?.map((el) => (
            <PostCard key={el.id} {...el}/>
        ))}
        
    </ul>
  )
}

export default PostsList