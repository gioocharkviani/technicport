'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";

const Select = ({ data, option, filterBy, defaultPlaceholder }: any) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [paramsName, setParamsName] = useState<string | null>(null);
    const [defValue, setDefValue] = useState(defaultPlaceholder);
    const [open, setOpen] = useState<Boolean>(false);

    const setParams = (id: number, name: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (paramsName) {
            params.set(paramsName, id.toString());
        }
        if (params.has('page')) {
            params.delete('page');
        }
        setDefValue(name); 
        router.push(`/shop?${params.toString()}`);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (option === 'filter') {
            if (filterBy === 'category') {
                setParamsName('category');
            }
            if (filterBy === 'brand') {
                setParamsName('brand');
            }
        }
    }, [filterBy, option]);

    // Determine the selected item based on URL parameters
    useEffect(() => {
        const selectedId = searchParams.get(paramsName || '');

        if (selectedId && data) {
            const selectedItem = data.find((item: any) => item.id.toString() === selectedId);
            if (selectedItem) {
                setDefValue(selectedItem.title);
            } else {
                setDefValue(defaultPlaceholder);
            }
        } else {
            setDefValue(defaultPlaceholder);
        }
    }, [searchParams, paramsName, data, defaultPlaceholder]);

    const selectedId = searchParams.get(paramsName || '');

    return (
        <div className='w-full flex flex-col relative overflow-hidden'>
            <button disabled={!data} onClick={handleOpen} className='input1 w-full flex'>
                {defValue}
            </button>
            {open && (
                <div className='oacityAnim w-full relative overflow-y-auto overflow-hidden max-h-[calc(100vh-200px)] bg-[#f4f2f2] p-[10px] rounded-md mt-[10px]'>
                    <ul className='flex flex-col gap-1'>
                        {data && data.map((item: any) => (
                            <button 
                                key={item.id} 
                                onClick={() => setParams(item.id, item.title)}
                                className={`px-3 py-2 hover:bg-gray-200 rounded-md ${selectedId === item.id.toString() ? 'bg-color1 text-white' : 'bg-white'}`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Select;
