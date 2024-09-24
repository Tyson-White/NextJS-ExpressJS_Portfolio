'use client'

import { FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Logo from "@/components/shared/logo";

interface Props {
    className?: string;
}

export const Header: FC<Props> = () => {

    const router = useRouter()

    return (
        <header className="fixed w-full h-20 flex items-center px-10 justify-between border-b border-b-white/30">
            <Logo />
            <div className="flex items-center gap-3">
                <Button handler={() => router.push('/signup')} text="Регистрация" variant="fill"/>
                <Button handler={() => router.push('/login')} text="Войти" variant="outline"/>
            </div>
        </header>
    )
}