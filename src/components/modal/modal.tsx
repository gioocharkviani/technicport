'use client'
import { useEffect , useRef,} from 'react'
import { IoClose } from "react-icons/io5";
import React from 'react'
import { useSession } from 'next-auth/react';

interface ModalProps  {
    openModal: any
    children? : React.ReactNode
    closeModal? : any
    title?: string
}


export const Modal: React.FC<ModalProps> = ({ title ,openModal , children, closeModal }) => {
    const modalRef = useRef(null);

    useEffect(() => {
          if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; 
        }

        const handleOutsideClick = (event: MouseEvent) => {
            if(modalRef.current === event.target){
                closeModal()
              }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [openModal , closeModal ]);


  return (
    <>
    {openModal &&
    <div ref={modalRef}  className='blackBgRgba overflow-y-auto w-full flex justify-center items-center h-full fixed z-[999] left-0  top-0'>
        <div className='max-w-[90%] relative min-w-[150px] min-h-[100px] max-h-[90vh] w-max h-max rounded-lg bg-white px-[10px] py-[10px]'>
            <div className='w-full h-auto flex justify-between'>
              <div  className='flex items-center text-[13px]'>{title}</div>
              <button onClick={closeModal} className='w-[20px] h-[20px]'>
                <IoClose className='w-full h-full text-gray-800 hover:text-gray-600'/>
              </button>
            </div>
            {children}
        </div>
    </div>
    }
    </>
  )
}
