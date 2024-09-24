import React, { FC } from 'react'
import PostCard from '@/components/shared/post-card';
import { PostCardProps } from '@/types/post';

interface Props {
    className?: string;
}

const posts: PostCardProps[] = [
    {
        id: 1,
        title: "LegionProxy - Современный сайт на Next.js",
        preview: "/static/img/legion.png",
        url: "legion-proxy-website",
        tags: [{ id: 1, text: "Next.js" }, { id: 2, text: "Redux" }, { id: 3, text: "Website" }],
        content: [{ type: 1, text: "Привет" }],
        time: { created: '23.09.2024 17.31', updated: "23.09.2024 17.31" },
        views: 25
    }
]


const PostsList: FC<Props> = ({}) => {
  return (
    <ul className='flex flex-col gap-10'>
        {posts.map((el) => (
            <PostCard key={el.id} {...el}/>
        ))}
        
    </ul>
  )
}

export default PostsList