import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import z from 'zod'
import { addressValidator } from '@/libs/validationSchema';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddShippingAddressForm = ({onAdd}:any) => {
    const { refetch } = onAdd; 


    type inputType = z.infer<typeof addressValidator>
    const  { register, handleSubmit ,reset , formState: {errors} } = useForm<inputType>({
        resolver: zodResolver(addressValidator)
      })

    const addAddress : SubmitHandler<inputType>  = async (data) =>{
        try {
            const req = await axios.post('/api/address/create' , data)
            if(req.status === 200){
                toast.success('მისამართი დაემატა წარმატებით')
                reset();
                refetch();
            }
        } catch (error) {
            toast.error('შეცდომა დამატების დროს')
        }
    }

  return (
    <div className='mt-[20px] w-full min-w-[300px]'>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(addAddress)}>
            <div className='flex flex-col gap-1'>
                <label className='text-[14px] text-[#454545] ml-[4px]'>city</label>
                <input {...register('city')} name='city' type='text' className='input1' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[14px] text-[#454545] ml-[4px]'>address</label>
                <input {...register('address')} name='address' type='text' className='input1' />
            </div>
            <div className='flex gap-3 flex-col smd:flex-row'>
                <div className='flex flex-col gap-1'>
                    <label className='text-[14px] text-[#454545] ml-[4px]'>phone</label>
                    <input {...register('phone')} name='phone' type='text' className='input1' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-[14px] text-[#454545] ml-[4px]'>zip</label>
                    <input {...register('zip')} name='zip' type='text' className='input1' />
                </div>
            </div>
            <div className='flex gap-[10px] justify-between mt-[20px]'>
                <button className='btn1'>დამატება</button>
            </div>
        </form>
    </div>
  )
}

export default AddShippingAddressForm;