import MaxWidthWrapper from "@/components/contentwrapper/maxWidthWrapper";
import Info from "@/components/info/info";
import Ourservices from "@/components/ourservices/ourservices";
import PhoneNumber from "@/components/phone/phoneNumber";
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
        <div className="flex gap-5 items-center">
          <Search />
          <PhoneNumber />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="flex gap-14 mt-[40px]">
          <Info />
          <Ourservices />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="flex gap-14 mt-[100px] px-[10px] rounded-lg py-[10px] whiteBoxShadow"> 
        asdsad
        </div>
      </MaxWidthWrapper>



    </main>
  );
}
