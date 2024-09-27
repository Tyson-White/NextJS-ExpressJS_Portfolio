export enum USER_ROLE {
    Заблокирован,
    Пользователь,
    Модератор,
    Админ
}



export interface IUser {
    id: number;
    email: string;
    name?: string;
    password: string;
    role: number;
}