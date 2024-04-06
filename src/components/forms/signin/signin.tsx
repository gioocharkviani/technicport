import React from 'react'

const Signin = () => {
  return (
    <div className='min-w-[250px] md:min-w-[300px] h-auto mt-[20px]'>
        <form className='flex flex-col w-full gap-3'>
            <input type='text' className='input1' />
            <input type='password' className='input1' />
            <div className='flex justify-between'>
                <div></div>
                <button className='btn1'>შესვლა</button>
            </div>
        </form>
    </div>
  )
}

export default Signin;