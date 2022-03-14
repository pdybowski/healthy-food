import React from 'react';

export const getLocalStorage = (data) => {
    localStorage.getItem(data);
};

export const setLocalStorage = (name) => {
    localStorage.setItem(name);
};
