'use client'

import { FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Logo from "@/components/shared/logo";
import { useGetMeQuery } from "@/redux/api";

interface Props {
    className?: string;
}

export const Header: FC<Props> = () => {

    const router = useRouter()

    const { data } = useGetMeQuery('')

    return (
        <header className="fixed w-full h-20 flex items-center px-10 justify-between border-b border-b-white/30">
            <Logo />
            {data?.email || <div className="flex items-center gap-3">
                <Button handler={() => router.push('/signup')} text="Регистрация" variant="fill"/>
                <Button handler={() => router.push('/login')} text="Войти" variant="outline"/>
            </div>}
        </header>
    )
}