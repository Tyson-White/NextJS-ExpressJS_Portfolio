import { FC } from "react"
import CommentCard from "@/components/shared/comments/comment-card"
import SendCommentBlock from "@/components/shared/comments/send-comment-block"
import { IComment, PostCardProps } from "@/types/post"
import { useGetMeQuery } from "@/redux/api";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
    className?: string;
    comments: IComment[] | undefined;
}

const PostComments: FC<Props> = ({ comments }) => {
    const router = useRouter()
    const { data } = useGetMeQuery('')

  return (
    <div className="mt-[1.25rem]">
        <h2 className="text-2xl">Комментарии</h2>
        {data?.id ? (
        <SendCommentBlock className={"mt-[1.25rem]"}/>
        ) : (
            <div className="flex items-center gap-3 mt-[1.25rem]">
                <span className="">Войдите в аккаунт, чтоб оставить комментарий</span>
                <Button handler={() => router.push('/login')} text={'Войти'} variant="outline"/>
            </div>
        )}
        <ul className="mt-[2.25rem]">
            {comments?.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
            ))}
            
        </ul>
    </div>
  )
}

export default PostComments