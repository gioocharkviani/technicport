interface LayoutProps {
  children: React.ReactNode;
}

import Header from './_components/header/header';
import SideNavbar from './_components/sideNavbar/sideNavbar';
import styles from './layout.module.css'


export default function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.main}>

      <div className={styles.sideBarWrapper}>
        <SideNavbar />
      </div>

      <div className={styles.dashobardWrapper}>
        <Header />
        {children}
      </div>

    </main>
  );
}
