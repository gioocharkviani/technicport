import MaxWidthWrapper from "@/components/contentwrapper/maxWidthWrapper";
import Info from "@/components/info/info";
import LandingShop from "@/components/landingShop/landingShop";
import Ourservices from "@/components/ourservices/ourservices";
import PhoneNumber from "@/components/phone/phoneNumber";
import Projects from "@/components/projects/projects";
import Search from "@/components/search/search";
import React from "react";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-3 items-center">
      
      <MaxWidthWrapper>
        <div className="w-full h-[200px] flex justify-center items-center">
          HERE WILL BE LOGO
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="flex flex-col-reverse md:flex-row  gap-5 items-center">
          <Search />
          <PhoneNumber />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14 mt-[40px]">
          <Info />
          <Ourservices />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <LandingShop />
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <Projects />
      </MaxWidthWrapper>



    </main>
  );
}