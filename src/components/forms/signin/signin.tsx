import React, { FormEvent } from 'react'
import {signIn } from "next-auth/react"


const Signin = () => {

  const handleSignIn = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    try {
      signIn('credentials', {
        email: fromData.get('email'),
        password: fromData.get('password'),
        redirect:false ,
      })
    } catch (error) {    
      console.error(error)  
    }
  } 

  return (
    <div className='min-w-[250px] md:min-w-[300px] h-auto mt-[20px]'>
        <form onSubmit={handleSignIn} className='flex flex-col w-full gap-3'>
            <input name='email' placeholder='Email' type='text' className='input1' />
            <input name='password' placeholder='Password' type='password' className='input1' />
            <div className='w-full flex justify-center'>
                <button className='btn1'>შესვლა</button>
            </div>
        </form>
    </div>
  )
}

export default Signin;