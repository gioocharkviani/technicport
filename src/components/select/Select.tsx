'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation";

const Select = ({ data, option, filterBy, defaultValue }: any) => {
    const router = useRouter();
    const [defValue, setDefValue] = useState(defaultValue);
    const [paramsName, setParamsName] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const page: any = searchParams.get('page');

    const setParams = (id: number, name: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(`${paramsName}`, id.toString());
        if (params.has('page')) {
            params.delete('page');
        }
        setDefValue(name); 
        router.push(`/shop?${params.toString()}`);
    };

    const [open, setOpen] = useState<Boolean>(false);
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

    return (
        <div className='w-full flex flex-col relative overflow-hidden'>
            <button disabled={!data} onClick={handleOpen} className='input1 w-full flex'>{defValue}</button>
            {open &&
                <div className={`oacityAnim w-full relative  overflow-y-auto overflow-hidden max-h-[calc(100vh-200px)] bg-[#f4f2f2] p-[10px] rounded-md mt-[10px]`}>
                    <ul className='flex flex-col gap-1'>
                          {data && data.map((i: any) =>
                            <button 
                                key={i.id} 
                                onClick={() => setParams(i.id, i.title_ge || i.brand_ge)}
                                className='px-3 py-2 hover:bg-gray-200 rounded-md bg-white'
                            >
                                {i.title_ge || i.brand_ge}
                            </button>
                          )}
                    </ul>
                </div>
            }
        </div>
    );
}

export default Select;
