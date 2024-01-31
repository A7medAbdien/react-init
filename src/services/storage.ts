// src/services/storageService.js
import { Storage } from '@ionic/storage';

const storage = new Storage();

export const initStorage = async () => {
    await storage.create();
};

export const setItem = async (key: string, value: string) => {
    await storage.set(key, value);
};

export const getItem = async (key: string) => {
    return await storage.get(key);
};

export const removeItem = async (key: string) => {
    await storage.remove(key);
};

export const clearStorage = async () => {
    await storage.clear();
};
