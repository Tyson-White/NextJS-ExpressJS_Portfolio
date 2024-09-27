import { portfolioApi, useLogoutMutation } from '@/redux/api';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux';

interface Props {
    className?: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const HeaderMenuDropdown: FC<Props> = ({ className, isOpen = false, setIsOpen }) => {
    const dispatch = useDispatch()

    const router = useRouter()
    const [logout, {}] = useLogoutMutation()

    const closeDropdown = () => {
        setIsOpen(false)
        document.removeEventListener('click', closeDropdown)
    }

    const handleLogout = () => {
        // after logout user data has cleaned
        logout('')
        router.push('/posts')
        dispatch(portfolioApi.util.resetApiState())
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', closeDropdown)
        }
    }, [isOpen])

    return (
        <div className={'absolute duration-150 translate-y-[-2.2rem] overflow-hidden rounded-xl w-[14rem] border border-black/10 shadow-md opacity-0 z-[-1]' + ` ${isOpen ? "opacity-[1] z-[10] translate-y-[0.8rem]  " : ""}`}>
            <div className='p-3 duration-150 flex items-center gap-3 justify-center hover:bg-black/5 cursor-pointer '>
                 <span onClick={handleLogout}>Выйти</span>
                 <LogOut className='w-[1.25rem] h-[1.25rem]'/>
            </div>
        </div>
    )
}

export default HeaderMenuDropdown