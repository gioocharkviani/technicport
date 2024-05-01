'use client'
import React, { useEffect } from 'react'
import { updatePassword } from '@/libs/validationSchema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver  } from '@hookform/resolvers/zod';
import z from 'zod'
import toast from 'react-hot-toast';
import axios from 'axios';

const ChangePasswordForm = () => {

    type inputType = z.infer<typeof updatePassword>

    const  { register, handleSubmit ,reset , formState: {errors} } = useForm<inputType>({
      resolver: zodResolver(updatePassword)
    })

    useEffect(()=>{
        if(errors.password){
          toast.error(errors.password.message || null)
        }
        if(errors.existingpassword){
          toast.error(errors.existingpassword.message || null)
        }
        if(errors.confirmPassword){
          toast.error(errors.confirmPassword.message || null)
        }
      },[errors.password, errors.existingpassword, errors.confirmPassword])
    
    const passwordChangeHandler: SubmitHandler<inputType> = async (data)=>{
        const {existingpassword, password} = data;
        try {
           const req =  await axios.patch('/api/user/changepassword' , {existingpassword , password})
            if(req.status === 200){
                toast.success('პაროლი განახლდა')
                reset();
            } 
        } catch (error:any) {
            if(error){
                console.log(error)
                toast.error(error.response.data)
            }
        }
    }


  return (
    <div className='flex w-full mt-[20px] flex-col gap-2'>
        <form className='w-full flex flex-col gap-3 ' onSubmit={handleSubmit(passwordChangeHandler)}> 
        
            <div className='flex flex-col gap-1'>
                <input {...register('existingpassword')} name='existingpassword' placeholder='არსებული პაროლი' type='password' className={`input1 ${errors.existingpassword? 'errorInput' : ''}`} />
            </div> 

            <div className='flex flex-col gap-1'>
                <input {...register('password')} name='password' placeholder='ახალი პაროლი' type='password' className={`input1 ${errors.password? 'errorInput' : ''}`} />
            </div> 

            <div className='flex flex-col gap-1'>
                <input {...register('confirmPassword')} name='confirmPassword' placeholder='გაიმეორეთ ახალი პაროლი' type='password' className={`input1 ${errors.confirmPassword? 'errorInput' : ''}`} />
            </div> 

            <button className='btn1'>შეცვლა</button>
        </form>
    </div>
  )
}

export default ChangePasswordForm