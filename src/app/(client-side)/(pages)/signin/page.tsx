'use client'
import React, {useEffect } from 'react'
import {signIn } from "next-auth/react"
import { signInSchema } from '@/libs/validationSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import z from 'zod'
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useTranslation } from '@/i18n/client';
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper';
import { redirect, useSearchParams } from 'next/navigation';

const Signin = () => {
  const {t} = useTranslation('response')
  const searchParams = useSearchParams();
  const callBackUrl = searchParams.get('callbackUrl');
  const {status} = useSession();

  type inputType = z.infer<typeof signInSchema>

  const  { register, handleSubmit ,reset , formState: {errors} } = useForm<inputType>({
    resolver: zodResolver(signInSchema)
  })

  useEffect(()=>{
    if(status !== 'loading' && status === 'authenticated'){
      redirect('/')
    }
  },[status])

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
        redirect: true,
        callbackUrl: callBackUrl || '/'
      }); 
      if(result?.ok){
        toast.success(t('success.welcome'));
      }if(result?.status === 401 && result.error === "CredentialsSignin" && !result.ok){
        toast.error(t('error.credential'))
      }
    } catch (err:any) {  
      console.error(err)
    }
  }
  

  return (
  <MaxWidthWrapper>

  {status !=='loading' && status === 'authenticated' && (
<div className='bg-white mt-[20px] rounded-lg p-[10px] flex flex-col justify-center items-center min-h-[350px] w-full'>
    <span>თქვენ შესული ხართ სისტემაში</span>
</div>
  )}

  {status !=='loading' && status === 'unauthenticated' && (
  <div className='bg-white mt-[20px] rounded-lg p-[10px] flex flex-col justify-center items-center min-h-[350px] w-full'>
    <h1 className='text-[22px] font-semibold text-[black]'>Sing In</h1> 
  <div className='min-w-[250px] md:min-w-[300px] h-auto mt-[20px]'>
        <form onSubmit={handleSubmit(signInFunc)} className='flex flex-col w-full gap-3'>
            <input {...register('email')} name='email' placeholder='Email' type='text' className={`input1 ${errors.email? 'errorInput' : ''}`} />
            <input {...register('password')} name='password' placeholder='Password' type='password' className={`input1 ${errors.password? 'errorInput' : ''}`} />
            <div  className='w-full flex justify-center'>
                <button className='btn1'>შესვლა</button>
            </div>
        </form>
      </div>
    </div>
    )}


  </MaxWidthWrapper>
  )
}

export default Signin;