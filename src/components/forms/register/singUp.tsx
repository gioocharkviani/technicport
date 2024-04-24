'use client'
import React, { useEffect } from 'react'
import { registationSchema } from '@/libs/validationSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import z from 'zod'
import { toast } from 'react-hot-toast';
import axios from 'axios'
import { signIn } from 'next-auth/react';
import { useModal } from '@/context/ModalContext';
import Signin from '../signin/signin';

const SignUp = () => {
  
  type inputType = z.infer<typeof registationSchema>

  const  { register, handleSubmit ,reset , formState: {errors} } = useForm<inputType>({
    resolver: zodResolver(registationSchema)
  })

  useEffect(()=>{
    Object.entries(errors).forEach(([key , value]) => {
      const errorMessage = (errors as any)[key].message; 
      toast.error(errorMessage);
    })
  },[errors])

  const userRegister : SubmitHandler<inputType> = async (data) => {
    const { confirmPassword, ...user } = data;
    try {
      axios.post('/api/auth/register', user)
      .then(function (response) {
        signIn('credentials' , {
          email:user.email,
          password: user.password,
          redirect:true,
        })
        toast.success(`hello ${user.firstName}`)
        reset();
      })
      .catch(function (error) {
        toast.error(error.response.data.error)
      });
    } catch (e) {
      console.error(e)
    }
  }

  const {updateModalContent , updateModalTitle} = useModal();
  const changeModalContent = ()=> {
    updateModalTitle('ავტორიზაცია');
    updateModalContent(<Signin />);
  }

  return (
    <div className='min-w-[250px] md:min-w-[300px] h-auto mt-[20px]'>
        <form className='flex flex-col w-full gap-3' onSubmit={handleSubmit(userRegister)}>

            <div className='flex gap-4'>
                <input {...register('firstName')} name='firstName' placeholder='first name' type='text' className={`input1 ${errors.firstName? 'errorInput' : ''}`} />
                <input {...register('lastName')} name='lastName' placeholder='last name' type='text' className={`input1 ${errors.lastName? 'errorInput' : ''}`} />
            </div>

            <input {...register('email')} name='email' placeholder='email' type='text' className={`input1 ${errors.email? 'errorInput' : ''}`} />
            <input {...register('phone')} name='phone' placeholder='phone' type='text' className={`input1 ${errors.phone? 'errorInput' : ''}`} />
            <input {...register('password')} name='password' placeholder='Password' type='password' className={`input1 ${errors.password? 'errorInput' : ''}`} />
            <input {...register('confirmPassword')} name='confirmPassword' placeholder='Password again' type='password' className={`input1 ${errors.confirmPassword? 'errorInput' : ''}`} />
          
            <div className='w-full flex justify-center'>
                <button className='btn1'>რეგისტრაცია</button>
            </div>
        </form>
      <div className='w-full border-t-[1px] border-gray-200 mt-[15px] py-[10px]'>
      <button onClick={changeModalContent} className='w-full text-[13px]'>შექმენი ახალი ანგარიში</button>
    </div>
    </div>
  )
}

export default SignUp;