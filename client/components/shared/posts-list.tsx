import React, { FC } from 'react'
import PostCard from '@/components/shared/post-card';
import { PostCardProps } from '@/types/post';
import PostPlaceholder from '@/components/shared/placeholders/post-placeholder';

interface Props {
    className?: string;
    list: PostCardProps[]
}


const PostsList: FC<Props> = ({ list }) => {
  return (
    <ul className='flex flex-col gap-1'>
        {list ? list.map((el) => (
            <PostCard key={el.id} {...el}/>
        )) : [...new Array(3)].map((el, index) => (
            <PostPlaceholder key={index}/> 
        ))}
        
        
    </ul>
  )
}

export default PostsList