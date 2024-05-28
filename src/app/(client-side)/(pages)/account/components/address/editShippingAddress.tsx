'use client';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';
import { addressValidator } from '@/libs/validationSchema';

const EditShippingAddressForm = ({ addressData, onEdit }: any) => {
    const { refetch } = onEdit;

    type inputType = z.infer<typeof addressValidator>
    const { register, handleSubmit, reset, formState: { errors } } = useForm<inputType>({
        resolver: zodResolver(addressValidator),
        defaultValues: {
            city: addressData.city,
            address: addressData.address,
            phone: addressData.phone,
            zip: addressData.zip,
        }
    });

    const editAddress: SubmitHandler<inputType> = async (data) => {
        try {
            const req = await axios.put('/api/address/update', {id: addressData.id , ...data});
            if (req.status === 200) {
                toast.success('მისამართი განახლდა წარმატებით');
                reset();
                refetch();
            }
        } catch (error) {
            toast.error('შეცდომა განახლების დროს');
        }
    }

    return (
        <div className='mt-[20px] w-full min-w-[300px]'>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(editAddress)}>
                <div className='flex flex-col gap-1'>
                    <label className='text-[14px] text-[#454545] ml-[4px]'>City</label>
                    <input {...register('city')} name='city' type='text' className='input1' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-[14px] text-[#454545] ml-[4px]'>Address</label>
                    <input {...register('address')} name='address' type='text' className='input1' />
                </div>
                <div className='flex gap-3 flex-col smd:flex-row'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[14px] text-[#454545] ml-[4px]'>Phone</label>
                        <input {...register('phone')} name='phone' type='text' className='input1' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[14px] text-[#454545] ml-[4px]'>Zip</label>
                        <input {...register('zip')} name='zip' type='text' className='input1' />
                    </div>
                </div>
                <div className='flex gap-[10px] justify-between mt-[20px]'>
                    <button className='btn1'>განახლება</button>
                </div>
            </form>
        </div>
    )
}

export default EditShippingAddressForm;
