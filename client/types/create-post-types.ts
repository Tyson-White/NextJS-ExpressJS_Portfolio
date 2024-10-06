export interface Post {
    title: string;
    preview: string;
    tags?: string[]
    paragraphs: IParagrapth[]
}

export type ContentType = 'picture' | 'text'

export interface IParagrapth {
    id: string
    type: ContentType;
    content: ParagraphContent;
}

export interface ParagraphContent {
    title: string;
    text: string;
    file: string | null;
}