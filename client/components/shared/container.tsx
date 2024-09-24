import { FC, ReactNode } from 'react'

interface Props {
    className?: string;
    children: ReactNode;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={'w-[1440px] h-[100%] mx-auto ' + className}>
        {children}
    </div>
  )
}

export default Container