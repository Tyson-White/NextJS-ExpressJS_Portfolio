import Container from '@/components/shared/container'
import Sidebar from '@/components/shared/sidebar'
import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
    <Container className="flex">
        <Sidebar />
        <div className='p-20 flex-1'>
            {children}
        </div>
    </Container>
    </>
    
  )
}

export default Layout