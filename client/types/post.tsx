type PostContent = {
    text?: string;
    url?: string;
    type: 1 | 2;
}

type PostTag = {
    id: number;
    text: string;
}

type PostTimes = {
    created: string;
    updated: string;
}

export interface PostCardProps {
    id: number;
    className?: string;
    title: string;
    content: PostContent[]
    preview: string;
    url: string;
    tags: PostTag[]
    time: PostTimes
    views: number;
}