'use client'
import { ModalProvider } from '@/context/ModalContext'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
interface pageProps {
    children: React.ReactNode
}



const ClientSideProviers = ({children}:pageProps) => {
  return (
      <Provider store={store}>
    <SessionProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </SessionProvider>
      </Provider>
  )
}

export default ClientSideProviers