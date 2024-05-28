'use client';
import Title1 from '@/components/title/title1';
import React from 'react';
import { useModal } from '@/context/ModalContext';
import AddShippingAddressForm from '../components/address/addShippingAddressForm';
import AddressCard from '../components/address/addressCard';
import { useFetch } from '@/hooks/useFetch';

const Address = () => {
    const { openModal } = useModal();
    const { apiData, isLoading, serverError, refetch } = useFetch({ url: '/api/address/get' });

    return (
        <div className='w-full flex flex-col gap-5 p-[10px]'>

            <div className='w-full flex justify-between items-center '>
                <div className='w-max'>
                    <Title1 title='მისამართები' />
                </div>

                <div className='w-max'>
                    <button onClick={() => openModal('მისამართის დამატება', <AddShippingAddressForm onAdd={{refetch}}/>)} className='btn1 w-max'>add new</button>
                </div>
            </div>

            {isLoading && (
                <div className='w-full py-[20px] bg-white text-[18px] capitalize flex justify-center items-center'>loading...</div>
            )}

            {!isLoading && apiData?.length > 0 && (
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {apiData.map((item: any) =>
                        <AddressCard key={item.id} data={item} reFetch={{ refetch }} />
                    )}
                </div>
            )}

            {apiData?.length === 0 && !isLoading && (
                <div className='w-full py-[20px] bg-white text-[18px] capitalize flex justify-center items-center'>
                    No addresses found
                </div>
            )}

            {!isLoading && apiData && serverError && (
                <div className='w-full py-[20px] bg-white text-[18px] capitalize flex justify-center items-center'>
                    {serverError}
                </div>
            )}

        </div>
    );
};

export default Address;
