import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [pageResource, setPageResource] = useState({
        mealPlans: [],
        recipes: [],
    });

    return (
        <AppContext.Provider value={{ pageResource, setPageResource }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
