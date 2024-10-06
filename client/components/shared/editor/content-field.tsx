import { FC, useEffect, useState } from 'react'
import ContentToggler from "@/components/shared/editor/content-toggler";
import TextField from './text-field';
import MediaUploader from './media-uploader';
import { Trash2 } from 'lucide-react';
import { ContentType, IParagrapth, ParagraphContent } from '@/types/create-post-types';

interface Props extends IParagrapth {
    onDeleteParagraph: () => void;
    onChangeContent: (content: ParagraphContent) => void;
    onChangeType: (value: ContentType) => void;
}

const ContentField: FC<Props> = ({ type, content, onChangeContent, onChangeType, onDeleteParagraph }) => {

    const [fieldType, setFieldType] = useState<ContentType>('text')

    const [paragraphContent, setParagraphContent] = useState<ParagraphContent>({
        title: '',
        text: '',
        file: null
    })

    const changeContentFields = (key: string, value: string | File) => {
        setParagraphContent(prev => ({ ...prev, [key]: value }))
    }

    useEffect(() => {
        onChangeType(fieldType)
    }, [fieldType])

    useEffect(() => {
        onChangeContent(paragraphContent)
        console.log(paragraphContent)
    }, [paragraphContent])

    useEffect(() => {
        setFieldType(type)
        setParagraphContent(content)
    }, [])

    return (
        <div className="mt-[5.42rem] relative flex flex-col group px-10 py-5 border-b-2 border-green-500 rounded-lg bg-white shadow-md">
            <div onClick={onDeleteParagraph} className="absolute duration-200 opacity-0 top-[-2rem] right-[2rem] group-hover:opacity-[1] group-hover:top-[-1rem] flex gap-2 items-center  cursor-pointer  text-red-600 px-3 py-1 shadow-md rounded-md hover:text-white hover:bg-red-600">
                <span>Удалить</span>
                <Trash2 className="w-[1.25rem] h-[1.25rem]"/>
            </div>
            <div>
                <span>Заголовок</span>
                <div>
                    <input value={paragraphContent.title} onChange={(e) => changeContentFields('title', e.target.value)} placeholder='Заголовок абзаца' className='outline-none h-[3.42rem] border-b w-[50%]'/>
                </div>
            </div>
            {
                fieldType === 'text' ? <TextField text={paragraphContent.text} onChange={(text) => changeContentFields('text', text)}/> 
                :
                fieldType === 'picture' ? <MediaUploader file={paragraphContent.file} onChange={(img) => changeContentFields('file', img)}/> 
                :
                <></>
            }

            <ContentToggler toggle={setFieldType}/>
        </div>
    )
}

export default ContentField