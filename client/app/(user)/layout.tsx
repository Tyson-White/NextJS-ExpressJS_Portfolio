import Container from '@/components/shared/container'
import Sidebar from '@/components/shared/sidebar'
import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
    <Container className="flex ">
        <Sidebar />
        <div className='px-20 pt-[4.4rem] flex-1 overflow-scroll h-[100vh]'>
            {children}
        </div>
    </Container>
    </>
    
  )
}

export default Layout