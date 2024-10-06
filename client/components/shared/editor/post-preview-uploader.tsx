import { useUploadImageMutation } from "@/redux/api"
import cn from "classnames"
import { Upload } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, FC, useState } from "react"

interface Props {
    onChange: (img: string) => void;
}

const PostPreviewUploader: FC<Props> = ({ onChange }) => {
    const [preview, setPreview] = useState('')

    const [uploadImageRequest] = useUploadImageMutation()

    const onChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            uploadImage(e.target.files[0])
            setPreview(filePreview(e.target.files[0]))
            onChange(e.target.files[0].name)
        }
    }

    const filePreview = (file: File) => {
        return URL.createObjectURL(file)
    }

    const uploadImage = (file: File) => {
        const data = new FormData();
        data.append('imageUrl', file)
        
        uploadImageRequest(data)
    }

  return (
    <div className="mt-[1.42rem]">
        <span className="px-10 text-2xl">Превью</span>
        <div className={cn(
            'relative w-[100%] duration-300 group h-[15rem] my-[5.42rem]',
            `${preview ? 'h-[35rem]' : ''}`
        )}>

            <div className={
                cn(
                    `${preview ? 'opacity-0' : ''}`,
                    'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex-col  duration-150 hover:border-yellow-500 cursor-pointer mx-auto w-[15rem] h-[15rem] flex items-center justify-center border rounded-xl border-b-8 shadow-md',
                    'group-hover:opacity-[1] z-10'
                )}
            >
                <Upload className='w-[3.42rem] h-[3.42rem]'/>
                <input type="file" accept="image/*" onChange={onChangeFileInput} className='absolute w-[100%] h-[100%] opacity-0'/>
                <span className='text-center mt-[1.42rem]'>Выберите файл либо перетащите его в эту зону.</span>

            </div>

            {preview && <div className=''>
                <Image className='z-[1]' src={preview} fill objectFit='cover' alt='image'/>
                <div className='duration-150 group-hover:bg-white/30 absolute z-[2] w-[100%] h-[100%]'>
                    <input type="file" className='absolute z-[2] w-[100%] h-[100%] opacity-0'/>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default PostPreviewUploader