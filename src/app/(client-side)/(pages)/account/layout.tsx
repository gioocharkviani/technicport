import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper';
import React from 'react'
import Menu from './components/menu/Menu';

interface accProps {
    children: React.ReactNode;
}

const AccountPage = ({children}:accProps) => {
  return (
    <MaxWidthWrapper>
        <div className='w-full gap-4 flex flex-col md:flex-row justify-center  mt-[20px]'>

            <div className='w-max md:flex hidden min-w-[200px] bg-white p-[10px] rounded-lg'>
                <Menu />
            </div>

            <div className='w-full bg-white p-[10px] rounded-lg'>
                {children}
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default AccountPage;