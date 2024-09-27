'use client'

import PostComments from "@/components/shared/comments/post-comments"
import { useGetOnePostQuery } from "@/redux/api"
import Image from "next/image"

type Props = {
    params: { url: string }
}

export default function Page({ params: { url } }: Props) {

    const { data: postData } = useGetOnePostQuery(url)

    return (
        <div>
            <h1 className="text-4xl">{postData?.title}</h1>
            <div className="mt-[3.25rem]">
                {postData?.content.map((content) =>  (
                    content.type === 1 ? (
                        <p className="text-lg">
                            {content.text}
                        </p>
                    ) : (
                        <div className="relative w-[100%] mt-[1.25rem]">
                            <Image src={`${content.url}`} width={1000} height={750} alt="legion2"/>
                        </div>
                    )
                ))}
            </div>

            <div className="w-[full] h-[1px] bg-white mt-[3.42rem]"></div>

            
            <PostComments comments={postData?.comments}/>
        </div>
    )
}