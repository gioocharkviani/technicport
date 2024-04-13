'use client'
import React, { useEffect } from 'react'
import { registationSchema } from '@/libs/validationSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import z from 'zod'
import { toast } from 'react-hot-toast';
import axios from 'axios'

const SignUp = () => {
  
  type inputType = z.infer<typeof registationSchema>

  const  { register, handleSubmit ,reset , formState: {errors} } = useForm<inputType>({
    resolver: zodResolver(registationSchema)
  })

  useEffect(()=>{
    Object.entries(errors).forEach(([key , value]) => {
      const errorMessage = (errors as any)[key].message; // Type assertion
      toast.error(errorMessage);
    })
  },[errors])

  const userRegister : SubmitHandler<inputType> = async (data) => {
    const { confirmPassword, ...user } = data;
    try {
      axios.post('/api/auth/register', user)
      .then(function (response) {
        toast.success(`Hello ${response.data.user.firstName}`);
        reset();
      })
      .catch(function (error) {
        toast.error(error.response.data.error)
      });
    } catch (e) {
      console.error(e)
    }
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
    </div>
  )
}

export default SignUp;