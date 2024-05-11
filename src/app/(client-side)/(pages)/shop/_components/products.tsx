'use client'
import React, { useEffect, useState } from 'react'
import ShopingCard from '@/components/cards/shopingCard'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await axios.get('/api/products/get');
                const data = req.data;
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-4 gap-5 w-full'>

            {products.map((product:any) => (
                <ShopingCard key={product.id} data={product}/>
            ))}
        </div>
    );
}

export default Products;
