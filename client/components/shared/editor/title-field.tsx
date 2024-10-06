import { FC } from 'react'

interface Props {
    title: string;
    onChange: (text: string) => void;
}

const TitleField: FC<Props> = ({ title, onChange }) => {
    return (
        <div className="mt-[5.42rem] flex flex-col px-10 py-5 h-[10rem] border-b-2 border-yellow-500 rounded-lg bg-white shadow-md">
            <span className="text-xl">Название</span>
            <input value={title} onChange={(e) => onChange(e.target.value)} placeholder="Введите интересное название" className="mt-[1.25rem] px-3 h-[3.42rem] outline-none rounded-lg border-2 border-black" type="text" />
        </div>
    )
}

export default TitleField