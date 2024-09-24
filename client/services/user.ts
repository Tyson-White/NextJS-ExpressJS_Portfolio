import { IForm } from "@/app/(auth)/signup/page";
import { instance } from "./axios-config"

export const register = async (formData: IForm) => {
    const { data } = await instance.post("/auth/register", 
        {
            ...formData
        }
    )

    return data;
}

export const login = async (formData: IForm) => {
    const { data } = await instance.post("/auth/login", 
        {
            ...formData
        }
    )

    return data;
}