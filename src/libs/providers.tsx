'use client'
import { LocaleProvider } from '@/hooks/locale-provider'
import { useLocale } from '@/hooks/locale-provider'
import { SessionProvider } from 'next-auth/react'
import { useSession } from 'next-auth/react'



interface ProviderProps {
    children : React.ReactNode
}

const Providers = ({children}:ProviderProps) => {
    const locale = useLocale();
  return (
    <SessionProvider>
      <LocaleProvider value={locale}>
        {children}
      </LocaleProvider>
    </SessionProvider>
  )
}

export default Providers