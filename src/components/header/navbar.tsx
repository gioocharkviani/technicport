"use client"
import NavMenu from './menu';
import Lang from './lang';
import LoginLink from './loginLink';
import HumburgerNavigation from './humburgerNavigation';
import {useSession } from 'next-auth/react';
import AccountB from '../user/AccountB';
import { useEffect } from 'react';

const Navbar = () => {
  const {status, data} = useSession();
  
  useEffect(()=>{
    document.body.style.overflow = 'auto';
  },[status])

  return (
    <div className='border-b-[2px] border-[#D4D4D4] h-[56px] w-full flex justify-center items-center'>
      <div className='max-w-[1500px] items-center w-full px-[10px] md:px-[30px] flex lg:flex-row flex-row-reverse justify-between'>
        <NavMenu />
        <HumburgerNavigation />
        <div className='w-max flex flex-row gap-[30px]'>
          <Lang />

          <div className='hidden lg:block'>
          {status === "authenticated" && 
            <AccountB />
          }

          {status === 'unauthenticated' &&
            <LoginLink />
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
