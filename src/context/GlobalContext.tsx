// src/context/LoginContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextProps {
    loggedIn: boolean;
    registered: boolean;
    profileOpen: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
    setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [registered, setRegistered] = useState(true);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <GlobalContext.Provider value={{ registered, setRegistered, loggedIn, setLoggedIn, profileOpen, setProfileOpen }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useLogin must be used within a LoginProvider');
    }
    return context;
};
