import { createContext, useContext, useState, type ReactNode } from "react";
import type { Environment } from "../entities/featureFlag/model/types";

type EnvironmentContextValue = {
    environment: Environment,
    setEnvironment: (env: Environment) => void;
};

const EnvironmentContext = createContext<EnvironmentContextValue | null>(null);

export const EnvironmentProdider = ({ children }: { children: ReactNode }) => {
    const [environment, setEnvironment] = useState<Environment>("dev");

    return (
        <EnvironmentContext.Provider value={{ environment, setEnvironment }}>
            {children}
        </EnvironmentContext.Provider>
    )
};

export const useEnvironment = () => {
    const context = useContext(EnvironmentContext);
    if(!context) {
        throw new Error("useEnvironment must be used within EnvironmentProvider")
    }

    return context;
}