interface LayoutProps {
  children: React.ReactNode;
}

import SideNavbar from './_components/sideNavbar/sideNavbar';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className='mainLayoutWrapper'>

      <div className='sideBarWrapper'>
        <SideNavbar />
      </div>

      <div className='dashobardWrapper'>
        {children}
      </div>

    </main>
  );
}
