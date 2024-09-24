'use client'

import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/ui/form-input"
import { Api } from "@/services/api-client"
import { Eye, Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

export interface IForm {
    name?: string;
    email: string;
    password: string;
    rePassword?: string;
}

type inputType = {
    password: "password" | "text"
    rePassword: "password" | "text"
}

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const Page = () => {

    const router = useRouter()
    
    const { register, handleSubmit, watch, control, formState: {errors} } = useForm<IForm>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: ""
        },
        mode: 'onChange'
    })

    const [registerLoading, setRegisterLoading] = useState(false)

    const [passwordsTypeState, setPasswordsTypeState] = useState<inputType>(
        {
            password: "password",
            rePassword: "password"
        }
    )

    const togglePasswordType = (type: "password" | "rePassword") =>  {
        const prevState: "password" | "text" = passwordsTypeState[type]

        setPasswordsTypeState(prev => ({
            ...prev,
            [type]: prevState === "password" ? "text" : "password"
        }))
    }


    const onSubmit: SubmitHandler<IForm> = async ({ rePassword, ...data }) => {
        try {
            setRegisterLoading(true)
            await Api.user.register(data)
            .then(() => router.push('/'))
        } catch (error) {
            
        } finally {
            setRegisterLoading(false)
        }
        
    }


    useEffect(() => {
        
    }, [])

    return (
        <div className="p-5">
            <h1 className='text-3xl text-center'>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[3.25rem] flex flex-1 h-[100%] gap-[2.25rem] flex-col justify-center">
                <FormInput
                    control={control}
                    register={register}
                    rules={{ minLength: {value: 2, message: "Минимум 2 символа"} }}
                    label={"Имя"} 
                    name="name"
                    placeholder="Василий"
                    
                />
                <FormInput 
                    control={control}
                    name="email"
                    rules={{ pattern:{ value: emailPattern, message: "Неверный формат почты"}, required: true }}
                    register={register}
                    label="Почта" 
                    placeholder="Vasiliy@site.ru" 
                />
                <FormInput 
                    control={control}
                    name="password"
                    rules={{ minLength: 8, required: true }}
                    register={register}
                    label="Пароль" 
                    placeholder="Пароль" 
                    type={passwordsTypeState["password"]} 
                    buttonIcon={<Eye color={`${passwordsTypeState.password === "text" ? "#4820e5" : "#fff"}`}/>}
                    buttonHandler={() => togglePasswordType("password")}
                />
                <FormInput 
                    name="rePassword"
                    register={register}
                    control={control}
                    rules={{ 
                        minLength: 8, 
                        required: true, 
                        validate: (val: string) => {
                            if (watch("password") != val) {
                                return "Password do no match"
                            }
                        }
                    }}
                    label="Повторите пароль" 
                    placeholder="Пароль еще раз" 
                    type={passwordsTypeState["rePassword"]} 
                    buttonIcon={<Eye color={`${passwordsTypeState.rePassword === "text" ? "#4820e5" : "#fff"}`}/>}
                    buttonHandler={() => togglePasswordType("rePassword")}
                    
                />

                <Button type="submit" className="mt-[1.25rem]" variant="fill" text={registerLoading ? <Loader /> : "Зарегистрироваться"}/>
                <Button 
                    handler={(e) => {
                        router.push('/login')
                        e.preventDefault();
                    }} 
                    variant="outline" 
                    text="Войти"
                />
            </form>
        </div>
    )
}

export default Page