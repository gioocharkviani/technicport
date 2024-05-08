'use client'
import React from 'react'
import { IoIosAdd } from "react-icons/io"
import { useModal } from '@/context/ModalContext'
import AddShippingAddressForm from './addShippingAddressForm'
import Addresscard from './addresscard'
import { useState , useEffect } from 'react'
import axios from 'axios'

const ShippingAddress = () => {

  const {updateModalContent, updateModalTitle} = useModal();
  const activeAddForm = ()=>{
    updateModalTitle('Add new shipping address')
    updateModalContent(<AddShippingAddressForm />)
  }
  const [address , setAddress] = useState<any>(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const req = await axios.get('/api/address/get');
        if (req.status === 200) {
          setAddress(req.data);
        }
      } catch (error) {
        console.error('Error fetching addresses:', error);
        // Handle other error cases if needed
      }
    };
    fetchAddress();
  }, []);
  

  return (
    <div className='flex flex-col gap-2 min-w-[200px]'>

        <button onClick={activeAddForm} className='btn3 justify-center mt-[16px]'>
          დამატება
          <IoIosAdd />
        </button>

      <div className='mt-[10px] text-[12px] flex flex-col gap-3 items-center'>
      {address ? address.map((item:any) => (
          <Addresscard key={item} data={item}/>
        )) : null}
      </div>

    </div>
  )
}

export default ShippingAddress