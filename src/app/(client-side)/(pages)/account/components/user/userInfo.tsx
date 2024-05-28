'use client'
import { useSession } from "next-auth/react"
import { useModal } from "@/context/ModalContext";
import ChangeUserInfo from "./changeUserInfo";

const UserInfo = () => {
    const {data:session} = useSession();
    const {openModal} = useModal();

    const editInfoHandler = ()=>{
        openModal("მონაცემების რედაქტირება" , <ChangeUserInfo />)
    }

  return (
    <div className='w-full h-full flex flex-col gap-2'>
        <div className="flex flex-col w-full">
            <span className="text-[12px] text-gray-500">first Name:</span>
            <span className="capitalize text-[16px] font-semibold">{session?.user.firstName}</span>
        </div>
        <div className="flex flex-col w-full">
            <span className="text-[12px] text-gray-500">Last Name:</span>
            <span className="capitalize text-[16px] font-semibold">{session?.user.lastName}</span>
        </div>
        <div className="flex flex-col w-full">
            <span className="text-[12px] text-gray-500">email:</span>
            <span className="text-[16px] font-semibold">{session?.user.email}</span>
        </div>
        <div className="flex flex-col w-full">
            <span className="text-[12px] text-gray-500">phone:</span>
            <span className="capitalize text-[16px] font-semibold">{session?.user.phone}</span>
        </div>

        <div className="flex justify-end w-full mt-[20px]">
            <div className="w-max">
                <button onClick={editInfoHandler} className="btn1">Edit</button>
            </div>
        </div>

    </div>
  )
}

export default UserInfo