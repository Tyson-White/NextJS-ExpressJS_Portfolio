import { FC } from "react"
import CommentCard from "@/components/shared/comments/comment-card"
import SendCommentBlock from "@/components/shared/comments/send-comment-block"
import { IComment } from "@/types/post"
import { useGetMeQuery } from "@/redux/api";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
    postId: number | undefined;
    className?: string;
    comments: IComment[] | undefined;
}

const PostComments: FC<Props> = ({ postId, comments }) => {
    const router = useRouter()
    const { data } = useGetMeQuery('')

  return (
    <div className="mt-[1.25rem]">
        <h2 className="text-2xl">Оставить комментарий</h2>
        {data?.id ? (
        <SendCommentBlock postId={postId} className={"mt-[1.25rem]"}/>
        ) : (
            <div className="flex items-center gap-3 mt-[1.25rem]">
                <span className="">Войдите в аккаунт, чтоб оставить комментарий</span>
                <Button handler={() => router.push('/login')} text={'Войти'} variant="outline"/>
            </div>
        )}
        <h2 className="text-2xl">Комментарии ({comments?.length})</h2>
        <ul className="mt-[2.25rem] flex flex-col gap-7">
            {comments?.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
            ))}
            
        </ul>
    </div>
  )
}

export default PostComments