import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header/header";

import { Fredoka } from 'next/font/google'
import { Noto_Sans_Georgian } from 'next/font/google'
const fredoka = Fredoka({ subsets: ['latin'] , weight: ['300','400','500','600','700'] })
const noto_Sans_Georgian = Noto_Sans_Georgian({ subsets: ['georgian' , 'latin'] , weight: ['300' , '400' , '500' , '600', '700' ,'800'] })

export const metadata: Metadata = {
  title: "Techno-port",
  description: "Techno-port",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${noto_Sans_Georgian.className} w-full min-h-screen flex-col items-center flex overflow-x-hidden`}>
      <Header />
        {children}
    </main>
  );
}
