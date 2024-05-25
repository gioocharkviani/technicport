'use client'
import axios from "axios";
import { useState , useEffect } from "react"
import { useLocale } from "./locale-provider";

export const useFetch = (url:string) =>{
    const locale = useLocale();
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [apiData , setApiData] = useState<any>(null);
    const [serverError , setServerError] = useState<any>(null);

    useEffect(()=>{
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await axios.get(url);
                const data = await resp?.data;
                setApiData(data);
                setIsLoading(false);
            }catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    },[url , locale]);
    return {isLoading , apiData , serverError};
}