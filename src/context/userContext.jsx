import { useAuth0 } from '@auth0/auth0-react';
import React, { createContext, useState, useEffect } from 'react';
import * as userService from "../services/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userId,setUserId] = useState(null)
  const {
    user,
    isAuthenticated,
    // loginWithRedirect,
    // logout,
  } = useAuth0();

      const checkUser = async (pUser) => {
      const status = await userService.checkAuthenticatedUser(pUser);
       console.log(status)
       setUserId(status.userId)
    }  
  useEffect(() => {
    if(isAuthenticated){
      console.log(user);
      checkUser(user);
    }
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ user,userId }}>
      {children}
    </UserContext.Provider>
  );
};
