'use client'
import React from 'react';
import ProductCard from '@/components/cards/productCard';
import { useFetch } from '@/hooks/useFetch';


const Products = (searchParams : any) => {
    const category = searchParams.category;
    const page = searchParams.page;
    const searchQuery = searchParams.search;
    const brand = searchParams.brand;

    const {isLoading , apiData , serverError} = useFetch(`/api/products/get?page=${page}&category=${category}&brand=${brand}&search=${searchQuery}`)

    return (
        <div className='grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 gap-5 w-full h-max'>

            {isLoading && 
              [...Array(24)].map((_ , i)=> 
                <div key={i} className='py-[8px] m-[10px] h-[270px] rounded-lg skeleton'></div>
              )
            }

            {!isLoading && apiData?.products.length === 0 && (
                <div className="col-span-full text-center text-gray-500">
                    No products found.
                </div>
            )}

            {!isLoading && serverError && (
                <div className="col-span-full text-center text-gray-500">
                    შეცდომა პროდუქტების ჩატვირთვის დროს
                </div>
            )}

            {apiData?.products.map((product:any) => (
                <ProductCard key={product.id} data={product}/>
            ))}

        </div>
    );
}

export default Products;
