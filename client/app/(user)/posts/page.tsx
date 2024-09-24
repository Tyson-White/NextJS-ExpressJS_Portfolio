import PostsList from '@/components/shared/posts-list'
import {} from 'react'


const Page = () => {
  return (
    <div className='overflow-y-scroll h-[87vh] pr-[1.25rem]'>
        <PostsList />
    </div>
  )
}

export default Page