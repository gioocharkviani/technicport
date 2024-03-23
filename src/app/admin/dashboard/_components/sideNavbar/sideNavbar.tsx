'use client'
import { useState } from 'react';

const SideNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`sideBar ${open ? 'active' : ''}`}>

      <div  className='sideBarButtonWrapper' >
        <button className='sideBarButton' onClick={() => setOpen(!open)}>
          <div className='line'></div>
        </button>
      </div>

      <div className='sideBarMenuWrapper'>
        <ul className=''>
sadasdassadasdasdas
          
        </ul>
      </div>

    </div>
  );
};

export default SideNavbar;