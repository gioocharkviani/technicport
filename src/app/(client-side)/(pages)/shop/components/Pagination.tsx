'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";

const Pagination = () => {
    const [currentPage , setCurrentPage] = useState<number | null>(null);
    const [pageLength , setPageLength] = useState<number>(0);
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const page = searchParams.get('page');
    const searchQuery = searchParams.get('search');
    const brand = searchParams.get('brand');

    const {isLoading, apiData, serverError}=useFetch(`/api/products/pagination?page=${page}&category=${category}&brand=${brand}&search=${searchQuery}`)
    const pageParam = parseInt(searchParams.get('page') || '1');
    setCurrentPage(pageParam);

    const handlePageChange = (pageNum: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', pageNum.toString());
        router.push(`/shop?${params.toString()}`);
    };

    if (!currentPage || currentPage === 0 || pageLength === 1 || pageLength ===0) {
        return null; // Don't render pagination if current page is null or 1
    }

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-max flex gap-3 justify-between items-center">
                
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage! - 1)}
                    className="w-[25px] h-[25px] rounded-md bg-[#ffffff] flex items-center justify-center"
                >
                    <GrFormPrevious className="w-[20px] h-[20px] text-[#4e4e4e]" />
                </button>

                <div className="flex gap-2 items-center justify-center rounded-md bg-white px-[10px] h-[30px]">
                    {
                        Array.from({ length: pageLength }, (_, i) => i + 1).map((pageNum) => 
                            <button
                                key={pageNum}
                                disabled={currentPage === pageNum}
                                onClick={() => handlePageChange(pageNum)}
                                className={`${currentPage === pageNum ? 'bg-color1 text-white' : 'bg-[#ffffff]'} w-[20px] hover:bg-color1 hover:text-white h-[20px] flex text-[gray] items-center justify-center text-[13px] rounded-sm`}
                            >
                                {pageNum}
                            </button>
                        )
                    }
                </div>

                <button
                    disabled={currentPage === pageLength}
                    onClick={() => handlePageChange(currentPage! + 1)}
                    className="w-[25px] h-[25px] rounded-md bg-[#ffffff] flex items-center justify-center"
                >
                    <GrFormNext className="w-[20px] text-[#4e4e4e] h-[20px]" />
                </button>
                
            </div>
        </div>
    );
}

export default Pagination;
