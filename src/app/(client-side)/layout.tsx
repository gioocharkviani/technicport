import { getLocale } from "@/i18n/server";
import Providers from '@/libs/providers';
import './globals.css'

interface RootLayoutProps {
    children: React.ReactNode;
  }
  
  export default function RootLayout({
    children,
  }: RootLayoutProps ) {
    const locale = getLocale();


    return (
      <html lang={locale}>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    );
  }
  