'use client'
import { useRef , useEffect} from 'react'
import { IoClose } from "react-icons/io5";
import React from 'react'

import { useModal } from '@/context/ModalContext';


export const Modal = () => {
    const modalRef = useRef(null);
    const {isOpen , closeModal,modalTitle ,modalContent} = useModal();

    useEffect(() => {
          if (isOpen) {
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
    }, [isOpen , closeModal ]);


  return (
    <>
    {isOpen &&
    <div ref={modalRef}  className='blackBgRgba w-full flex  justify-center items-center h-full fixed z-[999] left-0  top-0'>
        <div className='max-w-[90%] relative overflow-y-auto  min-w-[150px] min-h-[100px] max-h-[90vh] w-max h-max rounded-lg bg-white px-[10px] py-[10px]'>
            <div className='w-full h-auto flex justify-between'>
              <div  className='flex items-center text-[13px]'>{modalTitle}</div>
              <button onClick={closeModal} className='w-[20px] h-[20px]'>
                <IoClose className='w-full h-full text-gray-800 hover:text-gray-600'/>
              </button>
            </div>
            {modalContent}
        </div>
    </div>
    }
    </>
  )
}
