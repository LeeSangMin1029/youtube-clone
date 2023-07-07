import { ReactNode, createContext, useContext, useState, useMemo } from 'react';
import { UserData } from '@/@types/database';

type UserDataWithLoggedIn = UserData & {
  isLoggedIn: boolean;
};

type UserContextType = {
  user: UserDataWithLoggedIn;
  setUser: React.Dispatch<React.SetStateAction<UserDataWithLoggedIn>>;
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
  isLoggedIn: false,
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserDataWithLoggedIn>(initUser);
  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
