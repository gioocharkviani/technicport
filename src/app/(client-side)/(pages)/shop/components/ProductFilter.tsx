'use client'
import React, { useEffect, useState } from 'react'
import Select from '@/components/select/Select';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ShopSearch from './ShopSearch';

const ProductFilter = () => {
  const [catData , setCatData] = useState<any>(null)
  const [brandData , setBrandData] = useState<any>(null)
  const router = useRouter();

  useEffect(()=>{
    const getCategory =async () =>{
      const req= await axios.get('/api/category/get');
      if(req.status === 200){
        setCatData(req.data)
      }
    };
    const getBrand =async () =>{
      const req= await axios.get('/api/brand/get');
      if(req.status === 200){
        setBrandData(req.data)
      }
    };
    getCategory();
    getBrand();
  },[])
    
  return (
    <div className='flex p-[12px] flex-col gap-[20px]'>

          <div className='w-full'>
            <ShopSearch />
          </div>

        
          <div className='w-full flex flex-col gap-4 smd:flex-row lg:flex-col'>
            <Select data={catData} option='filter' filterBy='category' defaultValue='choose category'/>
            <Select data={brandData} option='filter' filterBy='brand' defaultValue='choose brand'/>
          </div>

          <div className='w-full'>
            <button className='btn1' onClick={()=> router.push('/shop')}>გასუფთავება</button>
          </div>



    </div>
  )
}

export default ProductFilter