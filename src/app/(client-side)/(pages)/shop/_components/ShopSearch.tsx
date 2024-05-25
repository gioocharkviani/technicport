'use client'
// Ensure you import necessary modules
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const ShopSearch = () => {
    const [searchQ, setSearchQ] = useState('');
    const router = useRouter();

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!searchQ.trim()) {
            // If searchQ is empty or only whitespace
            router.push(`/shop`);
        } else {
            // If searchQ has value, navigate to search results
            router.push(`/shop?search=${encodeURIComponent(searchQ)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className='w-full gap-2 items-center h-[40px] flex justify-between'>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQ(e.target.value)}
                value={searchQ}
                type='text'
                className='input1 w-full'
                placeholder='ძებნა...'
            />
            <button
                type='submit'
                className='w-[40px] h-[40px] rounded-md flex justify-center items-center shrink-0 bg-color2 hover:bg-[#f9a94e]'
            >
                <FaSearch className='text-white font-bold' />
            </button>
        </form>
    );
};

export default ShopSearch;
