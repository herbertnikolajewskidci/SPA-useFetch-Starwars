import { useCallback, useEffect, useState } from "react";

export default function useFetch(url) {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCharacters(
            data.results.map((char, index) => {
                return { ...char, id: index + 1 };
            })
        );
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(url);
    }, []);

    return [characters, isLoading];
}
