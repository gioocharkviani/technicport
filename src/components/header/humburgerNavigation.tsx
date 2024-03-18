'use client'

import { useEffect, useState } from "react";

const HumburgerNavigation = () => {

    const [open, setOpen] = useState<boolean>(false);
    
    const handleClick = () => {
      setOpen(!open);
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = "hidden";
        }else {
            document.body.style.overflowY = "auto";
        }
    }, [open]);

  return (
    <div className='w-max block lg:hidden'>

        <div className={`${open ? 'humburger-btn humburger-active' : 'humburger-btn'}`} onClick={handleClick}>
          <div className='bar-line'></div>
        </div>
        
        <div className={`humburgerMenuWrapper ${open? 'active' : ''}`}>
            
        </div>
        

    </div>
  )
}

export default HumburgerNavigation