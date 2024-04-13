import { getLocale } from "@/i18n/server";
import './globals.css'


interface RootLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function RootLayout({
    children,
  }: RootLayoutProps ) {
    const locale = getLocale();

    return (
      <html lang={locale}>
        <body>
            {children}
        </body>
      </html>
    );
  }
  