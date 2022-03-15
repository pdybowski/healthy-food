export const getLocalStorage = (keyName) => {
    return localStorage.getItem(keyName);
};

export const setLocalStorage = (keyName, data) => {
    localStorage.setItem(keyName, data);
};

export const clearLocalStorage = () => {
    localStorage.clear();
};
