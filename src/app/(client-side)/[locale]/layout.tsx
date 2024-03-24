import Providers from "@/libs/providers"

interface RootLayoutProps {
    children: React.ReactNode;
    params : {locale:string}
  }
  
  export default function RootLayout({
    children,
    params
  }: RootLayoutProps ) {


    return (
      <html lang={params.locale}>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    );
  }
  