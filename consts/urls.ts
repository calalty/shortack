export const URLS: Urls = {
  LOGIN: '/login',
  SIGN_UP: '/signup',
  HOME: '/'
};

export type Url = 'LOGIN' | 'SIGN_UP' | 'HOME';

export type Urls = {
  [u in Url]: string;
};
