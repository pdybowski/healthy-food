import React, { createContext, useContext, useEffect, useState } from 'react';
import ApiQuery from './components/shared/api/ApiQuery';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [pageResource, setPageResource] = useState({
        mealPlans: [],
        recipes: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const pageResource = (await ApiQuery.get('api/pageResource')).data;
            setPageResource(pageResource);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ pageResource, isLoading }}>{children}</AppContext.Provider>
    );
};

export default AppProvider;

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
