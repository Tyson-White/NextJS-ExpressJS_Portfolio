'use client'

import { FC, useState } from "react";
import { Forward } from 'lucide-react';
import {Button} from "@/components/ui/button"
import { useCreateCommentMutation } from "@/redux/api";

interface Props {
    postId: number | undefined
    className?: string;
}

const SendCommentBlock: FC<Props> = ({ postId, className }) => {

    const [send, {}] = useCreateCommentMutation()
    const [messageValue, setMessageValue] = useState('')

    const sendComment = () => {
        if (messageValue.length > 0 && postId) {
            send({
                message: messageValue,
                postId,
            })
        }
    }

    return (
        <div className={"w-[50%] " + className}>
            <div className="w-[100%] h-[8.94rem] bg-[#fff] shadow-md rounded-xl p-[2px]">
                <div className="w-[100%] h-[100%] border border-black/10 rounded-xl p-[0.85rem]">
                    <textarea value={messageValue} onChange={(e) => setMessageValue(e.target.value)} placeholder="Напишите комментарий" className={"w-[100%] h-[100%] outline-none resize-none"}/>
                </div>
            </div>
            <div className="w-[100%] flex justify-end mt-[1.25rem]">
                <Button handler={sendComment} variant="outline" text="Отправить" buttonIcon={<Forward className="w-[1.25rem] h-[1.25rem] translate-y-[-1px]" color={"#000"}/>}/>
            </div>
        </div>
    )
}

export default SendCommentBlock;