import { useState, useEffect, useRef } from "react";

export function useDebouncedValue<T>(value: T, delay: number) : T {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        };

        timeoutRef.current = window.setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [value, delay]);

    return debouncedValue;
};