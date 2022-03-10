import React, { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react/display-name
const withApp = (Child) => (props) =>
    <AppContext.Consumer>{(context) => <Child {...props} {...context} />}</AppContext.Consumer>;

export { AppContext, AppProvider, withApp };
