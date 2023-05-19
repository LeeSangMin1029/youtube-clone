import { ReactNode, createContext, useContext, useState, useMemo } from 'react';
import { UserData } from '@/@types/database';

type UserContextType = {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
  isLoggedIn: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

type UserProviderProps = {
  children: ReactNode;
};

const initUser = {
  googleID: '',
  name: '',
  email: '',
  thumbnails: '',
  userURL: '',
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserData>(initUser);
  const [isLoggedIn, setLogged] = useState(false);
  const contextValue = useMemo(
    () => ({ user, setUser, isLoggedIn, setLogged }),
    [user, setUser, isLoggedIn, setLogged],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
