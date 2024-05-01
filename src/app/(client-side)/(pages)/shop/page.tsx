import React from 'react'
import Products from './_components/products'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'

const ShopPage = () => {
  return (
    <div className='flex flec-col w-full'>
      <MaxWidthWrapper>
        <Products />
      </MaxWidthWrapper>
    </div>
  )
}

export default ShopPage