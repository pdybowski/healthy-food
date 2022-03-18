export const getLocalStorage = (name) => {
    return localStorage.getItem(name);
};

export const setLocalStorage = (name, data) => {
    localStorage.setItem(name, data);
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const removeFromLocalStorage = (name) => {
    localStorage.removeItem(name);
};
