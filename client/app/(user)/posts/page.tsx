'use client'

import PostsList from '@/components/shared/posts-list'
import { useGetPostsQuery } from '@/redux/api'
import {} from 'react'


const Page = () => {

    const { data } = useGetPostsQuery('')
    

    return (
        <div className='overflow-y-scroll h-[87vh] pr-[1.25rem]'>
            <PostsList list={data}/>
        </div>
    )
}

export default Page