import { IComment } from "@/types/post"
import { USER_ROLE } from "@/types/user"
import { formatDistance, subDays } from "date-fns"
import { Ban, Crown, Dog, User, Wrench } from "lucide-react"
import { FC } from "react"
import { ru } from "date-fns/locale"



const CommentCard: FC<IComment> = ({ message, createdAt, user }) => {

    const getDate = (createdAt: string) => {
        return formatDistance(subDays(new Date(createdAt), 0), new Date(), { addSuffix: true, locale: ru })
    }

    const USER_ROLE_THEMES = {
        [USER_ROLE[0]]: {
            styles: "bg-red",
            icon: <Ban className="w-[1.25rem] h-[1.25rem]"/>
        },
        [USER_ROLE[1]]: {
            styles: "",
            icon: ''
        },
        [USER_ROLE[2]]: {
            styles: "bg-blue",
            icon: <Wrench className="w-[1.25rem] h-[1.25rem]"/>
        },
        [USER_ROLE[3]]: {
            styles: "bg-yellow-500",
            icon: <Crown className="w-[1.25rem] h-[1.25rem]"/>
        }
    }

    return (
        <div className="p-5 w-[30rem] border border-white rounded-xl flex gap-3">
            <div className="w-[3.25rem] h-[3.25rem] flex items-center justify-center rounded-full border-2 border-white">
                <Dog />
            </div>
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