'use client'
import React, {useEffect } from 'react'
import {signIn } from "next-auth/react"
import { signInSchema } from '@/libs/validationSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import z from 'zod'
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useModal } from '@/context/ModalContext';
import SignUp from '../register/singUp';
import { useTranslation } from '@/i18n/client';

const Signin = () => {
  const {updateModalContent , updateModalTitle ,closeModal} = useModal();
  const {t} = useTranslation('response')

  const {status} = useSession();

  type inputType = z.infer<typeof signInSchema>

  const  { register, handleSubmit ,reset , formState: {errors} } = useForm<inputType>({
    resolver: zodResolver(signInSchema)
  })

  useEffect(()=>{
    if(errors.email){
      toast.error(errors.email.message || null)
    }
    if(errors.password){
      toast.error(errors.password.message || null)
    }
  },[errors.email, errors.password])
  
  const signInFunc: SubmitHandler<inputType>  = async (data) =>{
    const {email , password} = data;
    try {
      const result = await signIn('credentials', {
        email: email,
        password: password,
        redirect: false,
      }); 
      if(result?.ok){
        closeModal();
        toast.success(t('success.welcome'));
      }if(result?.status === 401 && result.error === "CredentialsSignin" && !result.ok){
        toast.error(t('error.credential'))
      }
    } catch (err:any) {  
      console.error(err)
    }
  }
  

  const changeModalContent = ()=> {
    updateModalTitle('რეგისტრაცია');
    updateModalContent(<SignUp />);
  }

  return (
    <div className='min-w-[250px] md:min-w-[300px] h-auto mt-[20px]'>
        <form onSubmit={handleSubmit(signInFunc)} className='flex flex-col w-full gap-3'>
            <input {...register('email')} name='email' placeholder='Email' type='text' className={`input1 ${errors.email? 'errorInput' : ''}`} />
            <input {...register('password')} name='password' placeholder='Password' type='password' className={`input1 ${errors.password? 'errorInput' : ''}`} />
            <div  className='w-full flex justify-center'>
                <button disabled={status === 'loading'} className='btn1'>შესვლა</button>
            </div>
        </form>
 
    <div className='w-full border-t-[1px] border-gray-200 mt-[15px] py-[10px]'>
      <button onClick={changeModalContent} className='w-full text-[13px]'>შექმენი ახალი ანგარიში</button>
    </div>

    </div>
  )
}

export default Signin;