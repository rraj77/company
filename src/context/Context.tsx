import React, { createContext, ReactNode, useState } from 'react';

export const contextProvider = createContext<any>(false);

const Context = ({ children }: { children: ReactNode }) => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<contextProvider.Provider value={{ openModal, setOpenModal }}>
			{children}
		</contextProvider.Provider>
	);
};

export default Context;
