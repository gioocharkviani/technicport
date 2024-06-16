"use client"
import NavMenu from './menu';
import Lang from './lang';
import LoginLink from '../links/loginLink';
import HumburgerNavigation from './humburgerNavigation';
import { useSession } from 'next-auth/react';
import AccountB from '../user/AccountB';
import { useEffect, useState } from 'react';
import CartLink from '../links/cartLink';
import { useDispatch } from 'react-redux';
import { detectUser } from '@/features/cart/cartSlice';
import axios from 'axios';

const Navbar = () => {
  const { status, data: session } = useSession();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Add loading state

  const getItems = async () => {
    try {
      const response = await axios.get('/api/cart/get');
      return response.data;
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'auto';
    const user: any = session?.user;
    if (status === 'authenticated') {
      getItems().then((p) => {
        dispatch(detectUser({
          user: user,
          cartItems: p
        }))
        setLoading(false); // Set loading to false after fetching data
      });
    } else {
      dispatch(detectUser(undefined));
      setLoading(false); // Set loading to false if not authenticated
    }
  }, [status]);

  if (loading) return null; // Return null or a loading spinner while loading

  return (
    <div className='border-b-[2px] border-[#D4D4D4] h-[56px] w-full flex justify-center items-center'>
      <div className='max-w-[1500px] items-center w-full px-[10px] md:px-[30px] flex lg:flex-row flex-row-reverse justify-between'>
        <NavMenu />

        <div className='w-max flex flex-row gap-[30px]'>

          <div className='hidden lg:block'>
            <Lang />
          </div>

          <div className='hidden lg:block'>
            <CartLink />
          </div>

          <div className='block'>
            {status === "authenticated" && 
              <AccountB />
            }

            {status === 'unauthenticated' &&
              <LoginLink />
            }
          </div>
        </div>
        <HumburgerNavigation />    
      </div>
    </div>
  );
};

export default Navbar;
