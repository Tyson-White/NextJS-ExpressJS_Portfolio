import { BadgeHelp, Heart, MessageCircle, Wrench } from "lucide-react"
import { FC } from "react"

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='fixed overflow-hidden flex rounded-xl w-[44rem] h-[40rem] border border-white/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className="w-1/2">{children}</div>
        <div className="w-1/2 pb-[1.82rem] px-[1.82rem] h-full bg-white">
            <div className="h-20 flex items-center justify-center">
                <span className="text-black text-xl">С аккаунтом ты сможешь:</span>
            </div>
            <ul className="flex flex-col  gap-4">
                <li className="flex items-center gap-2">
                    <Heart color="#000"/>
                    <span className="text-black">Ставить лайки на работы и посты</span>
                </li>
                <li className="flex items-center gap-2">
                    <MessageCircle color="#000"/>
                    <span className="text-black">Оставлять комментарии</span>
                </li>
                <li className="flex items-center gap-2">
                    <Wrench color="#000"/>
                    <span className="text-black">Тестировать функционал</span>
                </li>
            </ul>

            <div className="flex mt-[12rem] gap-3 flex-1 justify-end rounded-2xl border-2 p-2 border-black">
                <BadgeHelp className="min-w-[1.5rem] min-h-[1.5rem]" color="#000"/>
                <span className="text-black"> <i>Регистрируясь, ты можешь выявить возможные ошибки на сайте и просто поддержать меня : {')'}</i> </span>
            </div>
        </div>
    </div>
  )
}

export default Layout