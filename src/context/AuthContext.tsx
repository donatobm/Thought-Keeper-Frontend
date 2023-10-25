import { createContext } from 'react';

const AuthContext = createContext({
  login: token => {
    console.log(token);
  },
  logout: () => {},
  token: null,
});

export default AuthContext;
