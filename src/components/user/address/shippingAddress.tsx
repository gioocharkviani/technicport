import React from 'react'
import { IoIosAdd } from "react-icons/io"
import { useModal } from '@/context/ModalContext'
import AddShippingAddressForm from './addShippingAddressForm'
import Addresscard from './addresscard'

const ShippingAddress = () => {

  const {updateModalContent, updateModalTitle} = useModal();
  const activeAddForm = ()=>{
    updateModalTitle('add new Shipping address')
    updateModalContent(<AddShippingAddressForm />)
  }

  return (
    <div className='flex flex-col gap-2 min-w-[200px]'>

        <button onClick={activeAddForm} className='btn3 justify-center mt-[16px]'>
          დამატება
          <IoIosAdd />
        </button>

      <div className='mt-[10px] text-[12px] flex flex-col gap-3 items-center'>
        <Addresscard />
        <Addresscard />
        you dont have any address
      </div>

    </div>
  )
}

export default ShippingAddress