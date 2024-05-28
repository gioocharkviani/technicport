import Title1 from '@/components/title/title1';
import React from 'react'
import UserInfo from '../components/user/userInfo';
import ChangePasswordForm from '../components/user/changePasswordForm';
import ChangeUserInfo from '../components/user/changeUserInfo';

const parameters = () => {
  return (
    <div className='w-full flex flex-col gap-5 p-[10px]'>

          <div className='w-full flex justify-between items-center '>
                <div className='w-max'>
                    <Title1 title='პარამეტრები' />
                </div>
                <div className='w-max'></div>
          </div>

          <div className='w-full flex-col md:flex-row flex justify-between gap-4'>

            <div className='whiteBoxShadow p-[10px] w-full rounded-lg'>
              <ChangeUserInfo />
            </div>

            <div className='whiteBoxShadow p-[10px] w-full rounded-lg'>
              <ChangePasswordForm />
            </div>

          </div>

    </div>
  )
}

export default parameters;