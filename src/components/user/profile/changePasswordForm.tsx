import React from 'react'

const ChangePasswordForm = () => {
  return (
    <div className='flex w-full mt-[20px] flex-col gap-2'>
        <form className='w-full flex flex-col gap-3 '> 
        
            <div className='flex flex-col gap-1'>
                <input name='password' placeholder='არსებული პაროლი' type='text' className='input1' />
            </div> 

            <div className='flex flex-col gap-1'>
                <input name='password' placeholder='ახალი პაროლი' type='text' className='input1' />
            </div> 

            <div className='flex flex-col gap-1'>
                <input name='password' placeholder='გაიმეორეთ ახალი პაროლი' type='text' className='input1' />
            </div> 

            <button className='btn1'>შეცვლა</button>
        </form>
    </div>
  )
}

export default ChangePasswordForm