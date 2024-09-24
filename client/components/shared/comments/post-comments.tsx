import { FC } from "react"
import CommentCard from "@/components/shared/comments/comment-card"

interface Props {

}

const PostComments: FC<Props> = (props) => {

    const isAuth = false

  return (
    <div className="mt-[1.25rem]">
        <h2 className="text-2xl">Комментарии</h2>
        <ul className="mt-[2.25rem]">
            <CommentCard />
        </ul>
    </div>
  )
}

export default PostComments