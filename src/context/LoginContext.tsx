// src/context/LoginContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoginContextProps {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
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
