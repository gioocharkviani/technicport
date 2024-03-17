interface RootLayoutProps {
    children: React.ReactNode;
    params : {locale:string}
  }

  import "../globals.css";
  
  import { NextIntlClientProvider } from "next-intl";
  
  export default function RootLayout({
    children,
    params
  }: RootLayoutProps ) {
    return (
      <html lang={params.locale}>
        <body>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }
  