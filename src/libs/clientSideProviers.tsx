'use client'
import { SessionProvider } from 'next-auth/react'
interface pageProps {
    children: React.ReactNode
}



const ClientSideProviers = ({children}:pageProps) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default ClientSideProviers