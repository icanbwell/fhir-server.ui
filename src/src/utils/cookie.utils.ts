import cookies, { CookieAttributes } from 'js-cookie';

export const getCookie = (name: string) => {
    return cookies.get(name);
};

export const removeCookie = (name: string) => {
    cookies.remove(name);
};

export const setCookie = (name: string, value: any, options: CookieAttributes) => {
    return cookies.set(name, value, options);
};
