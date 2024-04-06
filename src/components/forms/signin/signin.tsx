import React from 'react'

const Signin = () => {
  return (
    <div className='min-w-[250px] md:min-w-[300px] h-auto mt-[20px]'>
        <form className='flex flex-col w-full gap-3'>
            <input placeholder='Email' type='text' className='input1' />
            <input placeholder='Password' type='password' className='input1' />
            <div className='w-full flex justify-center'>
                <button className='btn1'>შესვლა</button>
            </div>
        </form>
    </div>
  )
}

export default Signin;