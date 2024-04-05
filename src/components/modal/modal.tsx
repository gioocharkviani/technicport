'use client'
import { useEffect , useRef,} from 'react'
import { IoCloseCircleOutline } from "react-icons/io5"
import React from 'react'

interface modalTypes {
    openModal: any
    children? : React.ReactNode
    closeModal? : any
}


export const Modal = ({openModal , children, closeModal }:modalTypes) => {
    const modalRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = openModal ? 'hidden' : '';

        const handleOutsideClick = (event: MouseEvent) => {
            if(modalRef.current === event.target){
                closeModal()
              }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [openModal]);


  return (
    <>
    {openModal &&
    <div ref={modalRef}  className='blackBgRgba w-full flex justify-center items-center h-full fixed z-[999999] left-0  top-0'>
        <div className='max-w-[90%] relative min-w-[150px] min-h-[100px] max-h-[90vh] w-max h-max rounded-lg bg-white px-[10px] py-[10px]'>
            <div className='w-full h-auto flex justify-between'>
              <div></div>
              <button onClick={closeModal} className='w-[25px] h-[25px]'>
                <IoCloseCircleOutline className='w-full h-full text-color1 hover:text-color2'/>
              </button>
            </div>
            {children}
        </div>
    </div>
    }
    </>
  )
}
