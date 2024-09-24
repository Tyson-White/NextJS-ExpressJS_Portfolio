import { IForm } from '@/app/(auth)/signup/page';
import { FC, MouseEvent, ReactElement, useRef, useState } from 'react'
import { ErrorOption, UseFormRegister, useController, Control  } from 'react-hook-form';

type NameType = "name" | "password" | "rePassword" | "email"

interface Props {
    className?: string;
    label: string;
    type?: 'password' | 'text';
    placeholder?: string;
    register: UseFormRegister<any>;
    name: NameType;
    invalid?: ErrorOption;
    control: Control<IForm>;
    rules: object;
    buttonIcon?: ReactElement;
    buttonHandler?: () => void;
}


export const FormInput: FC<Props> = (props) => {
    const { className, invalid, placeholder, buttonIcon, buttonHandler, type = 'text', label} = props;
    const { field, fieldState } =  useController(props)

    const ref = useRef<HTMLInputElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [focused, setIsFocused] = useState<boolean>(false)

    const focusHandler = (e: MouseEvent): void => {
        ref.current?.focus()
    }

    
    return (
        <div onClick={focusHandler} className={
            'relative duration-150 w-[100%] h-[3.12rem] border rounded-xl flex items-center px-5' 
            + ` ${focused ? "border-[#4820e5]" : ""} `
            + ` ${fieldState.error ? "border-red-700" : ""} `
            + className
        }>
            <span className={`absolute px-[10px] duration-300 bg-[#0a0a0a] top-[-10px] left-[15px] text-sm ${focused ? 'opacity-0 top-[-30px]' : ''} `}>
                {label}
            </span>

            <input 
                {...field}
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)}
                ref={ref} 
                placeholder={placeholder} 
                type={type}
                className={`w-full outline-none bg-transparent `}
                aria-invalid={invalid?.message ? true :  false}
            />

           {buttonIcon && 
            <button type='button' ref={buttonRef} onClick={buttonHandler}>
                {buttonIcon}
            </button>
           }
            
        </div>
    )
}
