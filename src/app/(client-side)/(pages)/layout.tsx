import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Providers from "@/libs/providers";

import { Noto_Sans_Georgian } from 'next/font/google'
const noto_Sans_Georgian = Noto_Sans_Georgian({ subsets: ['georgian' , 'latin'] , weight: ['300' , '400' , '500' , '600', '700' ,'800'] })
import BottomNav from "@/components/bottonNavigation/bottomNav";
import { Modal } from "@/components/modal/modal";

export const metadata: Metadata = {
  title: "Techno-port",
  description: "Techno-port",
  icons: {
    icon: [
      './favicon.png'
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <Providers>
    <main className={`${noto_Sans_Georgian.className} bg-[#f2f3f6] w-full min-h-screen flex-col items-center flex overflow-x-hidden`}>
    <Modal />
      <Header />
      <div className="flex flex-col items-center w-full min-h-screen mt-[60px]">
        {children}
      </div>
      <Footer />
        <BottomNav />
    </main>
  </Providers>
  );
}


