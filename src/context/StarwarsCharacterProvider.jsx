import React, { createContext, useEffect, useState } from "react";
export const StarwarsCharacterContext = createContext();
const StarwarsCharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://swapi.dev/api/people/");
            const data = await res.json();
            setCharacters(
                data.results.map((char, index) => {
                    return { ...char, id: index + 1 };
                })
            );
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <StarwarsCharacterContext.Provider value={{ characters, isLoading }}>
            {children}
        </StarwarsCharacterContext.Provider>
    );
};

export default StarwarsCharacterProvider;
