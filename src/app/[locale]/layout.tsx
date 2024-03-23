
interface RootLayoutProps {
    children: React.ReactNode;
    params : {locale:string}
  }
  
  import {useTimeZone} from 'next-intl';
  import { useNow } from 'next-intl';
 
  
  import { NextIntlClientProvider, useMessages } from "next-intl";
  
  export default function RootLayout({
    children,
    params
  }: RootLayoutProps ) {

    const messages = useMessages();
    const timeZone = useTimeZone();
    const now = useNow();

    return (
      <html lang={params.locale}>
        <body>
          <NextIntlClientProvider messages={messages} timeZone={timeZone} now={now}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }
  