import { IComment } from "@/types/post"
import { USER_ROLE } from "@/types/user"
import { formatDistance, subDays } from "date-fns"
import { Ban, Crown, Dog, Trash2, Wrench } from "lucide-react"
import { FC } from "react"
import { ru } from "date-fns/locale"
import { useGetMeQuery, useDeleteCommentMutation } from "@/redux/api"

const CommentCard: FC<IComment> = ({ id, message, createdAt, user }) => {

    const { data } = useGetMeQuery('')
    const [deleteComment] = useDeleteCommentMutation()

    const getDate = (createdAt: string) => {
        return formatDistance(subDays(new Date(createdAt), 0), new Date(), { addSuffix: true, locale: ru })
    }

    const USER_ROLE_THEMES = {
        [USER_ROLE[0]]: {
            styles: "bg-red-600",
            borderColor: 'border-red-600',
            icon: <Ban className="w-[1.25rem] h-[1.25rem]"/>
        },
        [USER_ROLE[1]]: {
            styles: "",
            icon: ''
        },
        [USER_ROLE[2]]: {
            styles: "bg-blue ",
            borderColor: 'border-blue',
            icon: <Wrench className="w-[1.25rem] h-[1.25rem]"/>
        },
        [USER_ROLE[3]]: {
            styles: "bg-yellow-500",
            borderColor: 'border-yellow-500',
            icon: <Crown className="w-[1.25rem] h-[1.25rem]"/>
        }
    }

    const handleDeleteComment = () => {
        deleteComment(id)
    }

    return (
        <div className={"relative group p-5 w-[50rem] border-b-[3px] shadow-md rounded-xl flex gap-3" + ` ${USER_ROLE_THEMES[USER_ROLE[user.role]].borderColor}`}>
            <div className="w-[3.25rem] h-[3.25rem] flex items-center justify-center rounded-full border-2 border-white">
                <Dog />
            </div>
            {(data && user) && (data.id === user?.id || data.role >= 2) && <div onClick={handleDeleteComment} className="absolute duration-200 opacity-0 top-[-2rem] right-[2rem] group-hover:opacity-[1] group-hover:top-[-1rem] flex gap-2 items-center  cursor-pointer  text-red-600 px-3 py-1 shadow-md rounded-md hover:text-white hover:bg-red-600">
                <span>Удалить</span>
                <Trash2 className="w-[1.25rem] h-[1.25rem]"/>
            </div>}
            <div className="w-[100%]">
                <div className="flex gap-3">
                    <span>{user.name || 'Пользователь'}</span>
                </div>
                <p className="text-xl">{message}</p>
                <div className="flex items-center justify-between mt-[0.85rem]">
                    <span className="text-gray-500">{getDate(createdAt)}</span>
                    <span className={"flex gap-2 py-1 px-3 rounded-lg" + ` ${USER_ROLE_THEMES[USER_ROLE[user.role]].styles}`}>
                        {user.role !== 1 && USER_ROLE[user.role] } 

                        {USER_ROLE_THEMES[USER_ROLE[user.role]].icon}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommentCard