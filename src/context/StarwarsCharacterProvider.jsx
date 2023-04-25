import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const StarwarsCharacterContext = createContext();

const StarwarsCharacterProvider = ({ children }) => {
    const [characters, isLoading] = useFetch("https://swapi.dev/api/people/");

    return (
        <StarwarsCharacterContext.Provider value={{ characters, isLoading }}>
            {children}
        </StarwarsCharacterContext.Provider>
    );
};

export default StarwarsCharacterProvider;
