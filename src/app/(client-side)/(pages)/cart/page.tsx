'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';
import { detectUser, changeQty ,checked } from '@/features/cart/cartSlice';
import Title1 from '@/components/title/title1';

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  const totalItems = useSelector((state: any) => state.cart.itemsQty);
  const products = useSelector((state: any) => state.cart.products);
  const user = useSelector((state: any) => state.cart.user);

  const [itemsLoading, setItemsLoading] = useState(true);

  const getItems = async () => {
    try {
      const response = await axios.get('/api/cart/get');
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items', error);
    }
  };

  const changeQuantity = (id: string, quantity: number) => {
    dispatch(changeQty({ id, quantity }));
  };

  const removeFromCart = (id: string) => {
    dispatch(changeQty({ id, quantity: 0 })); // Reduce quantity to zero to remove item
  };

  const onCheckedHandler = (id: string, currentChecked: boolean) => {
    dispatch(checked({ id, checked: !currentChecked }));
  };

  
  useEffect(() => {
    if (user) {
      getItems().then((cartItems) => {
        dispatch(detectUser({ user, cartItems }));
        setItemsLoading(false);
      });
    } else {
      setItemsLoading(false);
    }
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <Title1 title="Shopping cart" />
      <div className="flex flex-col lg:flex-row gap-4 mt-[30px]">
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          {itemsLoading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {products.map((i: any) => (
                <div key={i.id} className="border-b pb-4 flex flex-col md:flex-row items-center md:justify-between">
                  <div className="w-max flex gap-3 items-center relative">
                    <input type="checkbox" checked={i.checked} onChange={()=> onCheckedHandler(i.id , i.checked)}/>
                    <Image src={i.thumbnail} alt={i.title_ge} className="object-contain h-[60px]" width={60} height={60} />
                    <div>
                      <h2 className="text-lg font-semibold">{i.title_ge}</h2>
                      <p className="text-[12px] text-[#575757] font-medium">Price: {i.price} GEL</p>
                    </div>
                  </div>
                  <div className="flex gap-[20px] items-center">
                    <div className="flex items-center border-[1px] rounded-sm border-[gray]">
                      <button onClick={() => changeQuantity(i.id, -1)} className="w-[22px] border-r-[1px] border-[gray]">
                        -
                      </button>
                      <span className="w-[22px] flex justify-center text-[12px]">{i.cartQty}</span>
                      <button onClick={() => changeQuantity(i.id, 1)} className="w-[22px] border-[gray] border-l-[1px]">
                        +
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(i.id)}>
                      <FaRegTrashAlt className="hover:text-[red] transition-all" />
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
              <span>{itemsLoading ? 0 : totalItems}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total Price:</span>
              <span>{itemsLoading ? 0 : totalPrice} GEL</span>
            </div>
            <button className="btn1">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
