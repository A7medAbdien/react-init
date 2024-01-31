// src/context/LoginContext.tsx

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';
import { CategoryStrings, Colors, LoginStrings } from '../data/Strings';
import { getItem, initStorage } from '../services/storage';

interface GlobalContextProps {
    isPayed: boolean;
    loggedIn: boolean;
    registered: boolean;
    profileOpen: boolean;
    secondaryColoredBg: boolean;
    setIsPayed: React.Dispatch<React.SetStateAction<boolean>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
    setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [isPayed, setIsPayed] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [secondaryColoredBg, setSecondaryColoredBg] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        const rootElement = document.documentElement;
        if ((pathname.includes('category') || pathname.includes('tabs') || pathname.includes('main')) && !profileOpen && (pathname.includes('tab') || pathname.split('/').length < 4)) {
            setSecondaryColoredBg(true);
            rootElement.style.setProperty('--ion-background-color', Colors.beige);
        } else {
            setSecondaryColoredBg(false)
            rootElement.style.setProperty('--ion-background-color', Colors.navy);
        }
    }, [pathname, profileOpen, secondaryColoredBg]);

    useEffect(() => {
        setProfileOpen(false)
    }, [pathname])

    const isLoggedIn = async () => {
        const username = await getItem('username');

        return username == LoginStrings.username; // Return true if username exists, false otherwise
    };
    const isUserPayed = async () => {
        const isPayed = await getItem('isPayed');

        return !!isPayed; // Return true if username exists, false otherwise
    };

    useEffect(() => {
        const checkLoggedIn = async () => {
            await initStorage();
            const userIsLoggedIn = await isLoggedIn();
            const userPayed = await isUserPayed();

            if (userIsLoggedIn) {
                setLoggedIn(true);
            }
            if (userPayed) {
                setIsPayed(true);
            }
        };

        checkLoggedIn();
    }, []);
    return (
        <GlobalContext.Provider value={{ isPayed, setIsPayed, registered, setRegistered, loggedIn, setLoggedIn, profileOpen, setProfileOpen, secondaryColoredBg }}>
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
