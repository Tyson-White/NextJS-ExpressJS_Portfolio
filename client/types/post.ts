import { IParagrapth, ParagraphContent } from "./create-post-types";
import { IUser } from "./user";

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
    content: IParagrapth[];
    preview: string;
    url: string;
    tags: string[];
    views: number;
    comments: IComment[]
    createdAt: string;
    updatedAt: string;
}