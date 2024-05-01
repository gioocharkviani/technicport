import React from 'react'

const AddShippingAddressForm = () => {
  return (
    <div className='mt-[20px]'>
        <form className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <label className='text-[14px] text-[#454545] ml-[4px]'>city</label>
                <input type='text' className='input1' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[14px] text-[#454545] ml-[4px]'>address</label>
                <input type='text' className='input1' />
            </div>
            <div className='flex gap-3'>
                <div className='flex flex-col gap-1'>
                    <label className='text-[14px] text-[#454545] ml-[4px]'>phne</label>
                    <input type='text' className='input1' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-[14px] text-[#454545] ml-[4px]'>zip</label>
                    <input type='text' className='input1' />
                </div>
            </div>
            <button className='btn1'>დამატება</button>
        </form>
    </div>
  )
}

export default AddShippingAddressForm;