import { FC } from 'react'

interface Props {
    text: string;
    onChange: (text: string) => void;
}


const TextField: FC<Props> = ({ text, onChange }) => {


    return (

        <div className='mt-[3.42rem]'>
            <span>Текст</span>
            <div className='mt-[0.85rem]'>
                <textarea value={text} onChange={(e) => onChange(e.target.value)} placeholder='Заголовок абзаца' className='outline-none h-[6.42rem] border-b w-[50%]'/>
            </div>
        </div>

    )
}

export default TextField