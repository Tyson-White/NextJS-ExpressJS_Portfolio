'use client'

import Container from "@/components/shared/container";
import ContentField from "@/components/shared/editor/content-field";
import PostPreviewUploader from "@/components/shared/editor/post-preview-uploader";
import TitleField from "@/components/shared/editor/title-field";
import { Button } from "@/components/ui/button";
import { useCreatePostMutation } from "@/redux/api";
import { IParagrapth, ParagraphContent, Post } from "@/types/create-post-types";
import { Plus, Send } from "lucide-react";
import { nanoid } from "nanoid";

import { useEffect, useState } from "react";

const paragraphObj: IParagrapth = {
    id: nanoid(),
    content: {
        title: '',
        text: '',
        file: null
    },
    type: 'text'
}

function Page() {
    const [createPost] = useCreatePostMutation()

    const [title, setTitle] = useState('')
    const [preview, setPreview] = useState('')
    const [paragraphs, setParagraphs] = useState<IParagrapth[]>([])

    const filterParagraphsById = (deleteId: string) => {
        setParagraphs(prev => prev.filter((paragraph) => paragraph.id !== deleteId))
    }

    const onChangeParagraphField = (id: string, field: 'content' | 'type', value: string | ParagraphContent) => {
        const updatingParagraph = paragraphs.find(paragraph => paragraph.id === id)
        if (!updatingParagraph) return

        const updatedParagraph = {
            ...updatingParagraph,
            [field]: value
        }

        setParagraphs(prev => prev.map((paragraph) => {
            if (paragraph.id === id) {
                return updatedParagraph
            }

            return paragraph
        }))
    }

    const savePost = () => {
        const cachedPost = JSON.stringify({
            title,
            paragraphs
        })
        localStorage.setItem('post', cachedPost)
    }

    const sendPost = () => {
        createPost({
            title,
            tags: [''],
            preview,
            paragraphs
        })
    }

    useEffect(() => {
        if (title || paragraphs.length > 0) {
            savePost()
        }
    }, [title, paragraphs])

    useEffect(() => {
        const postString = localStorage.getItem('post')
        
        if (postString) {
            const post: Post = JSON.parse(postString)
            setTitle(post.title)
            setParagraphs(post.paragraphs)
        }
    }, [])

    return (
        <Container className="w-[40%] overflow-scroll">
            <div className="mt-[5.42rem] ">
                <div className="flex justify-end">
                    <Button handler={sendPost} buttonIcon={<Send className="w-[1.25rem] h-[1.25rem]"/>} text={'Опубликовать'} variant="outline"/>
                </div>
                
                <h1 className="text-3xl">Создание поста</h1>

                <TitleField title={title} onChange={setTitle}/>

                <PostPreviewUploader onChange={setPreview}/>

                {paragraphs.map((paragraph) => (
                    <ContentField 
                        key={paragraph.id} 
                        id={paragraph.id}
                        content={paragraph.content}
                        type={paragraph.type}
                        onDeleteParagraph={() => filterParagraphsById(paragraph.id)}
                        onChangeContent={(content) => onChangeParagraphField(paragraph.id, 'content', content)}
                        onChangeType={(value) => onChangeParagraphField(paragraph.id, 'type', value)}

                    />
                ))}

                <Button 
                    className={'mt-[1.25rem] mx-auto'} 
                    buttonIcon={<Plus className="w-[1.25rem] h-[1.25rem]"/>} 
                    text={'Добавить абзац'} 
                    variant="outline"
                    handler={() => setParagraphs(prev => [...prev, {...paragraphObj, id: nanoid()}])}
                />
            </div>
        </Container>
    )
}

export default Page