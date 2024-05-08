interface LayoutProps {
    children: React.ReactNode;
  }

  export const metadata: Metadata = {
    title: "ADMIN",
    description: "ADMIN",
  };
  

import { Metadata } from 'next';
  import './admin.css'
  
  export default function Layout({ children }: LayoutProps) {
    return (
      
      <main>
        {children}
      </main>
    )
  }
  