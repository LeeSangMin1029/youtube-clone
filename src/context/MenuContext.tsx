import { expandableTheme, expandedTheme } from '@/styles/theme';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

type MenuContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuContextProvider');
  }
  return context;
};

type MenuProviderProps = {
  children: ReactNode;
};

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const contextValue = useMemo(() => ({ open, setOpen }), [open, setOpen]);

  return (
    <ThemeProvider theme={open ? expandedTheme : expandableTheme}>
      <MenuContext.Provider value={contextValue}>
        {children}
      </MenuContext.Provider>
    </ThemeProvider>
  );
};

export default MenuProvider;
