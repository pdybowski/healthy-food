import React, { createContext } from 'react';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};

// eslint-disable-next-line react/display-name
const withApp = (Child) => (props) =>
    <ApiContext.Consumer>{(context) => <Child {...props} {...context} />}</ApiContext.Consumer>;

export { ApiContext, ApiProvider, withApp };
