import { IUser } from "./user";

type PostContent = {
    text?: string;
    url?: string;
    type: 1 | 2;
}

export interface ICreatePost {
    message: string;
    postId: number;
}

export interface IComment {
    id: number;
    message: string;
    userId: number;
    postId: number;
    user: IUser
    createdAt: string;
    updatedAt: string;
}


export interface PostCardProps {
    id: number;
    className?: string;
    title: string;
    content: PostContent[];
    imageUrl: string;
    url: string;
    tags: string[];
    views: number;
    comments: IComment[]
    createdAt: string;
    updatedAt: string;
}