'use client'
import Title1 from '@/components/title/title1'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegTrashAlt } from "react-icons/fa";
import Image from 'next/image';

const ShoppingCart = () => {

  return (
    <div className="container mx-auto p-4">

      <Title1 title='Shopping cart' />
{/* 
      <div className="flex flex-col lg:flex-row gap-4 mt-[30px]">
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {products.map((product: any) => (
                <div key={product.id} className="border-b pb-4 flex flex-col md:flex-row items-center md:justify-between">
                    <div className='w-max flex gap-3 items-center'>
                    <Image src={product.image} alt={product.name} width={60} height={60} />
                    <div>
                      <h2 className="text-lg font-semibold">{product.name}</h2>
                      <p className='text-[12px] text-[#575757] font-medium'>Price: {product.price} GEL</p>
                    </div>
                    </div>

                   <div className='flex gap-[20px] items-center'>

                  <div className="flex items-center   border-[1px] rounded-sm border-[gray] ">
                    <button 
                      onClick={() => dispatch(decrementQuantity(product.id))} 
                      className="w-[22px] border-r-[1px] border-[gray]"
                    >
                      -
                    </button>
                    <span className="w-[22px] flex justify-center text-[12px ">{product.quantity}</span>
                    <button 
                      onClick={() => dispatch(incrementQuantity(product.id))} 
                      className="w-[22px]  border-[gray]  border-l-[1px]"
                      >
                      +
                    </button>
                    </div> 

                    <button 
                      onClick={() => dispatch(removeFromCart(product.id))} 
                    >
                      <FaRegTrashAlt  className='hover:text-[red] transition-all'/>
                    </button>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total Price:</span>
              <span>{totalPrice} GEL</span>
            </div>
            <button className="btn1">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ShoppingCart
