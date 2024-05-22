'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = () => {
    const [currentPage , setCurrentPage] = useState<number | null>(null);
    const [pageLength , setPageLength] = useState<number>(0);
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const page = searchParams.get('page');
    const searchQuery = searchParams.get('search');
    const brand = searchParams.get('brand');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await axios.get(`/api/products/pagination?page=${page}&category=${category}&brand=${brand}&search=${searchQuery}`);
                const data = req.data;
                setPageLength(data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
        const pageParam = parseInt(searchParams.get('page') || '1');
        setCurrentPage(pageParam);
    }, [searchParams]);

    const handlePageChange = (pageNum: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', pageNum.toString());
        router.push(`/shop?${params.toString()}`);
    };

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-max flex gap-3 justify-between items-center">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage! - 1)}
                    className="w-[20px] h-[20px] rounded-md bg-[#ececec] flex items-center justify-center"
                >
                    <GrFormPrevious className="w-[20px] h-[20px]" />
                </button>
                <div className="flex gap-2 items-center justify-center">
                    {
                        Array.from({ length: pageLength }, (_, i) => i + 1).map((pageNum) => 
                            <button
                                key={pageNum}
                                disabled={currentPage === pageNum}
                                onClick={() => handlePageChange(pageNum)}
                                className={`${currentPage === pageNum ? 'bg-color1 text-white' : 'bg-[#ececec]'} w-[20px] h-[20px] flex items-center justify-center text-[13px] rounded-sm`}
                            >
                                {pageNum}
                            </button>
                        )
                    }
                </div>
                <button
                    disabled={currentPage === pageLength}
                    onClick={() => handlePageChange(currentPage! + 1)}
                    className="w-[20px] h-[20px] rounded-md bg-[#ececec] flex items-center justify-center"
                >
                    <GrFormNext className="w-[20px] h-[20px]" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
