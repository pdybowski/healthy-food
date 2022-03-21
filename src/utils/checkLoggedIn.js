import { getLocalStorage } from './localeStorage';
import { LS_TOKEN } from '../constants/localStorage';

export const checkIfLoggedIn = (callback) => {
    window.onload = () => {
        const token = getLocalStorage(LS_TOKEN);
        if (token) {
            callback(true);
        }
    };
};
