'use client'

import { ButtonHTMLAttributes, FC, MouseEvent, ReactElement } from "react";

type Variant = 'outline' | 'fill'

interface Props {
    className?: string;
    text: ReactElement | string;
    handler?: (e: MouseEvent<HTMLButtonElement>) => void;
    variant: Variant;
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const buttonStyle = {
    outline: "border border-white-50/50 hover:bg-white hover:text-black",
    fill:  "bg-white  text-black hover:bg-white/80"
}

export const Button: FC<Props> = ({ text, variant, type = 'button', handler, disabled, className }) => {

    return (
        <button 
            type={type}
            disabled={disabled} 
            className={`h-10 flex justify-center items-center transition-colors duration-[0.4s] rounded-xl px-5 ${disabled ? 'bg-white/50 hover:bg-white/50' : ''} active:translate-y-[2px] ` + buttonStyle[variant] + ' ' + className} 
            onClick={handler}>
            {text}
        </button>
    )
}