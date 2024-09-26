'use client'

import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/ui/form-input"
import { Eye, Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { IForm } from "../signup/page"
import { useLoginMutation } from "@/redux/api"

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const page = () => {
    const router = useRouter()

    const [login] = useLoginMutation()

    const { register, handleSubmit, watch, control, formState: {errors} } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: 'onChange'
    })

    const [registerLoading, setRegisterLoading] = useState(false)

    const [passwordTypeState, setPasswordTypeState] = useState<"password" | "text">("password")

    const onSubmit: SubmitHandler<IForm> = async ({ email, password }) => {
        try {
            
            await login({ email, password })
            router.push('/posts')
            
        } catch (error) {

        } finally {
            setRegisterLoading(false)
        }
    }

    return (
        <div className="p-5">
            <h1 className='text-3xl text-center'>Вход</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[3.25rem] flex flex-1 h-[100%] flex-col justify-center">
                <FormInput 
                    control={control}
                    register={register}
                    rules={{ pattern:{ value: emailPattern, message: "Неверный формат почты"}, required: true }}
                    label={"Почта"} 
                    name="email"
                    placeholder="Vasiliy@site.ru"
                    invalid={errors.email}
                />
                <FormInput 
                    control={control}
                    name="password"
                    rules={{ minLength: 8, required: true }}
                    register={register}
                    label="Пароль" 
                    className="mt-[1.25rem]"
                    placeholder="Пароль" 
                    type={passwordTypeState} 
                    buttonIcon={<Eye color={`${passwordTypeState === "text" ? "#4820e5" : "#000"}`}/>}
                    buttonHandler={() => setPasswordTypeState(prev => prev === "password" ? "text" : "password")}
                    invalid={errors.password}
                />
                <span className="mt-[0.5rem] cursor-pointer flex justify-end">Забыли пароль?</span>
                <Button type="submit" className="mt-[1.25rem]" variant="outline" text={registerLoading ? <Loader /> : "Войти"}/>
            </form>

            <Button handler={() => router.push('/signup')} className="mt-[0.85rem] w-[100%]" variant="fill" text="Регистрация"/>
        </div>
    )
}

export default page