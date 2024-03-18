interface RootLayoutProps {
    children: React.ReactNode;
    params : {locale:string}
  }

  import "./globals.css";
  
  import { NextIntlClientProvider, useMessages } from "next-intl";
  
  export default function RootLayout({
    children,
    params
  }: RootLayoutProps ) {
    const messages = useMessages();
    return (
      <html lang={params.locale}>
        <body>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }
  