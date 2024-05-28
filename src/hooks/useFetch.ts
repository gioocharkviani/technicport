import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useLocale } from "./locale-provider";

interface useFetchProps {
    url: string,
    refetchKey?: any,
}

export const useFetch = ({ url, refetchKey }: useFetchProps) => {
    const locale = useLocale();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [apiData, setApiData] = useState<any>(null);
    const [serverError, setServerError] = useState<any>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const resp = await axios.get(url);
            const result = resp?.data;
            setApiData(result);
        } 
        catch (error) {
            setServerError('1231231');
        } 
        finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData, locale, refetchKey]);

    return { isLoading, apiData, serverError, refetch: fetchData };
};
