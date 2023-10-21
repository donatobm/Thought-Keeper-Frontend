import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login: token => {
    console.log(token);
  },
  logout: () => {},
  token: null,
});

export default AuthContext;
