'use client'
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

import Image from "next/image";
import UserIcon from "../../../public/svg/userIcon";

import { IoSettingsOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";

import { useState , useRef, useEffect } from "react";

import { Modal } from "@/components/modal/modal";
import ShippingAddress from "./address/shippingAddress";
import Orders from "./orders/orders";
import Payments from "./payments/payments";
import UserParameters from './profile/userParameters'

const AccountB = () => {

    //Modal options//
    const [modal , setModal] = useState(false)
    const [modalContent , setModalContent] = useState(null)
    const handleButtonClick = (content:any) => {
      setModalContent(content);
      setModal(true); 
    };
    //Modal options//

  //Open and close Prifle menu
  const [open , setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function closeMenu(event:any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if(modal){
      setOpen(false)
    }
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [modal , open]);
  
  const toggleOpen = () => {
    setOpen(!open);
  };
  //Open and close Prifle menu


  const {data : session} = useSession();


  return (
  <>
    <Modal openModal={modal} closeModal={()=> setModal(false)}>
      {modalContent === "orders" && <Orders />}
      {modalContent === "payments" && <Payments />}
      {modalContent === "address" && <ShippingAddress />}
      {modalContent === "parameters" && <UserParameters />}
    </Modal>
    
    <div className="md:flex relative hidden flex-col justify-center items-center">

        <button onClick={toggleOpen}  className="w-max rounded-md flex gap-2 items-center whiteBoxShadow px-[10px] py-[4px]">
        <div className="w-[22px] flex items-center justify-center shrink-0 h-[22px] rounded-[50%] bg-[#dadada]">
          {session?.user?.photo? 
          <Image alt='profilePhoto' width={50} height={50} src={session?.user?.photo} />
          :
          <UserIcon />
        }
        </div>
        <div className="text-[14px] uppercase">{session?.user?.firstName}</div>
        </button>
      
      {open &&
        <div ref={menuRef} className="absolute rounded-md top-[50px] flex flex-col gap-3 min-w-full right-0 whiteBoxShadow p-[10px]">

        <div className="flex flex-col gap-1">

          <button className="btn3" onClick={() => handleButtonClick("orders")}>
            <LuShoppingBag />
            <span>orders</span>
          </button>
          <button className="btn3" onClick={() => handleButtonClick("payments")}>
            <MdOutlinePayments />
            <span>payments</span>
          </button>
          <button className="btn3" onClick={() => handleButtonClick("address")}>
            <IoLocation />
            <span>address</span>
          </button>
          <button className="btn3" onClick={() => handleButtonClick("parameters")}>
            <IoSettingsOutline />
            <span>parameters</span >
          </button>

        </div>

        <button className="btn2" onClick={()=>signOut()}>გასვლა</button>
      </div>
      }

    </div>
  </>
  )
}

export default AccountB