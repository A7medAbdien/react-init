// src/context/LoginContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoginContextProps {
    loggedIn: boolean;
    registered: boolean;
    profileOpen: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
    setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <LoginContext.Provider value={{ registered, setRegistered, loggedIn, setLoggedIn, profileOpen, setProfileOpen }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error('useLogin must be used within a LoginProvider');
    }
    return context;
};
