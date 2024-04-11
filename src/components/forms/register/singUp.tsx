import React from 'react'

const SignUp = () => {
  return (
    <div className='min-w-[250px] md:min-w-[300px] h-auto mt-[20px]'>
        <form className='flex flex-col w-full gap-3'>

            <div className='flex gap-4'>
                <input placeholder='first name' type='text' className='input1' />
                <input placeholder='last name' type='text' className='input1' />
            </div>

            <input placeholder='phone' type='text' className='input1' />

            <input placeholder='email' type='text' className='input1' />

            <input placeholder='Password' type='password' className='input1' />

            <input placeholder='Password again' type='password' className='input1' />

            <div className='w-full flex justify-center'>
                <button className='btn1'>რეგისტრაცია</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp;