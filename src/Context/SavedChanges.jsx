import React, { createContext, useState, useEffect} from "react";

/*savedChanges.jsx is used for global usage of variables and these changes are kept when page refreshes*/
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    useEffect(() => { 
        
    }, []);

    const contextValue = {}

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};