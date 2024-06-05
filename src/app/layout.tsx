import ClientSideProviers from '@/libs/clientSideProviers';
import './globals.css'
import { getLocale } from '@/i18n/server';
import { Toaster } from 'react-hot-toast';


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
        <Toaster position="top-right" reverseOrder={false} toastOptions={{className: 'toastContainer',}}/>
          <ClientSideProviers>
            {children}
          </ClientSideProviers>
        </body>
      </html>
    );
  }
  