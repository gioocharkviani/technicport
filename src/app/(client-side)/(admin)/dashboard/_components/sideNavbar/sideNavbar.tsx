'use client'
import Link from 'next/link';
import { useState } from 'react';
import { CiBoxList } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";

const SideNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`sideBar ${open ? 'active' : ''}`}>

      <div className={`sideBarButtonWrapper ${open ? 'activeBtn' : ''}`}>
        <button className='sideBarButton' onClick={() => setOpen(!open)}>
          <div className='line'></div>
        </button>
      </div>

      <div className='mt-[20px] w-full flex flex-col'>
        <ul className='flex flex-col gap-1'>

        <Link href='/dashboard/addproduct' className='menu-link'>
            <CiBoxList className='menu-icon' />
            <span className={`menu-text ${open ? 'block' : 'hidden'}`}>Products</span>
          </Link>

          <Link href='/dashboard/orders' className='menu-link'>
            <MdOutlinePayment className='menu-icon' />
            <span className={`menu-text ${open ? 'block' : 'hidden'}`}>Payments</span>
          </Link>

        </ul>
      </div>

    </div>
  );
};

export default SideNavbar;