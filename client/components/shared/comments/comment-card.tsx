import { Crown, Dog } from "lucide-react"
import { FC } from "react"

interface Props {

}

const CommentCard: FC<Props> = (props) => {


  return (
    <div className="p-5 w-fit border border-white rounded-xl flex gap-3">
        <div className="w-[3.25rem] h-[3.25rem] flex items-center justify-center rounded-full border-2 border-white">
            <Dog />
        </div>
        <div>
            <div className="flex gap-3">
                <span>TysonWhite</span>
            </div>
            <p className="text-xl">Здорово получилось, ставьте лайки!</p>
            <div className="flex justify-between mt-[0.85rem]">
                <span className="text-gray-500">15 сек. назад</span>
                <span className="flex gap-1 bg-yellow-500 py-1 px-3 rounded-lg">Админ <Crown className="w-[1.25rem] h-[1.25rem]"/></span>
            </div>
        </div>
    </div>
  )
}

export default CommentCard