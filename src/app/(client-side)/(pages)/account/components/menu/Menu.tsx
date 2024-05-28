import React from 'react'
import MenuLink2 from '../../../../../../components/links/MenuLink2';


import order from '../../../../../../../public/png/account/order.png'
import payments from '../../../../../../../public/png/account/payments.png'
import parameters from '../../../../../../../public/png/account/parameters.png'
import address from '../../../../../../../public/png/account/address.png'
import user from '../../../../../../../public/png/account/user.png'

const Menu = () => {
  return (
    <div className='w-full'>
        <ul className='flex flex-row justify-center flex-wrap gap-2 ite md:flex-col'>
            <MenuLink2 title='პროფილი' link='/account' icon={user}/>
            <MenuLink2 title='შეკვეთები' link='/account/orders' icon={order}/>
            <MenuLink2 title='გადახდები' link='/account/payments' icon={payments}/>
            <MenuLink2 title='მისამართები' link='/account/address' icon={address}/>
            <MenuLink2 title='პარამეტრები' link='/account/parameters' icon={parameters}/>
        </ul>
    </div>
  )
}

export default Menu