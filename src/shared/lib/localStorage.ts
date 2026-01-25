export function loadFromStorage<T>(key: string) : T | null {
    try {
        const raw = localStorage.getItem(key);
        if(!raw) {
            return null;
        }
        return JSON.parse(raw) as T;
    } catch {
        return null;
    }
};

export function saveToStorage<T>(key: string, value: T) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {

    }
};