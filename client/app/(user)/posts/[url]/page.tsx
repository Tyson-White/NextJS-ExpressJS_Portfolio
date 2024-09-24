'use client'

import PostComments from "@/components/shared/comments/post-comments"
import { useGetMeQuery } from "@/redux/api"
import Image from "next/image"
import { useSelector } from "react-redux"

type Props = {
    params: { url: string }
}

export default function Page({ params: { url } }: Props) {

    const { data } = useGetMeQuery('')

    console.log(data)

    return (
        <div>
            <h1 className="text-4xl">LegionProxy - Современный сайт на Next.js</h1>
            <div className="mt-[3.25rem]">
                <p className="text-lg">
                    Совеременный прокси сайт, написанный на Next.js{"(фронтенд)"}/Nest.js{"(бекенд)"}. <br/>
                    Содержит страницы: генератор строки авторизации прокси, покупка прокси, страница с информацией о 
                    транзакциях, страница управления профилем с реф.кодом.
                </p>
                <div className="relative w-[100%] mt-[1.25rem]">
                    <Image src={'/static/img/legion2.png'} width={1000} height={750} alt="legion2"/>
                </div>
                <p className="text-lg mt-[1.25rem]">
                    Есть главная страница с красивой анимированной презентацией сайта, чтоб завлечь пользователя с первых секунд.
                </p>
            </div>

            <div className="w-[full] h-[1px] bg-white mt-[3.42rem]"></div>

            
            <PostComments />
        </div>
    )
}