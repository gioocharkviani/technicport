'use client'
import Link from 'next/link';
import { useState } from 'react';

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
 
      </div>

    </div>
  );
};

export default SideNavbar;