import React, { createContext, ReactNode, useState } from 'react';
import { ContextProps } from '../interfaces/context';

export const contextProvider = createContext<ContextProps | boolean>(false);

const Context = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <contextProvider.Provider value={{ openModal, setOpenModal }}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
