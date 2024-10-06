import { Images, LetterText } from "lucide-react";

import { FC, useEffect, useState } from 'react'
import { ContentType } from "./content-field";

interface Props {
    toggle: (type: ContentType) => void
}

const ContentToggler: FC<Props> = ({ toggle }) => {

    const [selectedType, setSelectedType] = useState<ContentType>('text')

    useEffect(() => {
        toggle(selectedType)
    }, [selectedType])

    return (
        <div className="absolute right-5 min-h-[2.05rem] bottom-5 flex gap-3 w-fit rounded-lg">
            <div className={`duration-200 absolute w-[50%] h-[100%] border-b-2 border-black ${selectedType === "text" && "translate-x-[100%]"}`}></div>
            <div onClick={() => setSelectedType('picture')} className={"w-[3.25rem] h-[100%] cursor-pointer flex items-center justify-center z-10 "}>
                <span><Images className="w-[1.25rem] h-[1.25rem]"/></span>
            </div>
            <div onClick={() => setSelectedType('text')} className={"w-[3.25rem] h-[100%] cursor-pointer flex items-center justify-center " }>
                <span><LetterText className="w-[1.25rem] h-[1.25rem]"/></span>
            </div>
        </div>
            
    )
}

export default ContentToggler