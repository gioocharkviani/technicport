'use client'
import { ModalProvider } from '@/context/ModalContext'
import { SessionProvider } from 'next-auth/react'
interface pageProps {
    children: React.ReactNode
}



const ClientSideProviers = ({children}:pageProps) => {
  return (
    <SessionProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </SessionProvider>
  )
}

export default ClientSideProviers