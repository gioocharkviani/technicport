import ClientSideProviers from '@/libs/clientSideProviers';
import './globals.css'
import { getLocale } from '@/i18n/server';


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
          <ClientSideProviers>
            {children}
          </ClientSideProviers>
        </body>
      </html>
    );
  }
  