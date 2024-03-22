
interface LayoutProps {
    children: React.ReactNode;
  }
  
  import '@/app/[locale]/globals.css'
  
  export default function Layout({
    children,
  }: LayoutProps ) {
    return (
        <html >
        <body>
            {children}
        </body>
      </html>
    )
  
  }
  