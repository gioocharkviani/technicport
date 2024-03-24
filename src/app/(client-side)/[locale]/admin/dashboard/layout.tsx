interface LayoutProps {
  children: React.ReactNode;
}

import Header from './_components/header/Header';
import SideNavbar from './_components/sideNavbar/sideNavbar';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className='mainLayoutWrapper'>

      <div className='sideBarWrapper'>
        <SideNavbar />
      </div>

      <div className='dashobardWrapper'>
        <Header />
        {children}
      </div>

    </main>
  );
}
