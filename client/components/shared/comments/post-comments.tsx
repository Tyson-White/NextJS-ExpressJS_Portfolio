import { FC } from "react"
import CommentCard from "@/components/shared/comments/comment-card"
import SendCommentBlock from "@/components/shared/comments/send-comment-block"

interface Props {

}

const PostComments: FC<Props> = (props) => {

    const isAuth = false

  return (
    <div className="mt-[1.25rem]">
        <h2 className="text-2xl">Комментарии</h2>
        <SendCommentBlock className={"mt-[1.25rem]"}/>
        <ul className="mt-[2.25rem]">
            <CommentCard />
        </ul>
    </div>
  )
}

export default PostComments