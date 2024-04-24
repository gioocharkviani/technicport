
import { LocaleProvider } from '@/hooks/locale-provider'
import { getLocale } from '@/i18n/server'


interface ProviderProps {
    children : React.ReactNode
}

const Providers = ({children}:ProviderProps) => {
    const locale = getLocale();
  return (
      <LocaleProvider value={locale}>
        {children}
      </LocaleProvider>

  )
}

export default Providers