type PostContent = {
    text?: string;
    url?: string;
    type: 1 | 2;
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
    createdAt: string;
    updatedAt: string;
}