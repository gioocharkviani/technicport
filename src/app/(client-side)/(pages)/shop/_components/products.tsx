'use client'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/cards/productCard'
import axios from 'axios'


const Products = (searchParams : any) => {
    const category = searchParams.category;
    const page = searchParams.page;
    const searchQuery = searchParams.searchq;
    const brand = searchParams.brand;


    const [products, setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {       
            try {
                const req = await axios.get
                (`/api/products/get?page=${page}&category=${category}&brand=${brand}&search=${searchQuery}`);
                const data = req.data;
                setProducts(data.products);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching products:', error);
                setIsLoading(false)
            }
        };

        fetchData();
    }, [searchParams]);
    
    return (
        <div className='grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 gap-5 w-full h-max'>

            {isLoading && 
              [...Array(24)].map((_ , i)=> 
                <div key={i} className='py-[8px] h-[270px] rounded-lg skeleton'></div>
              )
            }

            {products.map((product:any) => (
                <ProductCard key={product.id} data={product}/>
            ))}
        </div>
    );
}

export default Products;
