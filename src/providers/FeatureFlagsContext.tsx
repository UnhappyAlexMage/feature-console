import { createContext, useContext, type ReactNode } from "react";
import type { Environment, FeatureFlag } from "../entities/featureFlag/model/types";
import { useFeatureFlags } from "../hooks/useFeatureFlags";

type FeatureFlagsContextValue = {
    flags: FeatureFlag[];
    toggleFlag: (flag: FeatureFlag, env: Environment) => void;
    addFlag: (flag: FeatureFlag) => void;
    removeFlag: (id: string) => void;
    isLoading: boolean;
    error: string | null;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextValue | null>(null);

export function FeatureFlagsProvider({ children } : { children: ReactNode }) {
    const featureFlagsToContext = useFeatureFlags();

    return (
        <FeatureFlagsContext.Provider value={featureFlagsToContext}>
            { children }
        </FeatureFlagsContext.Provider>
    )
}

export const useFeatureFlagsContext = () => {
    const context = useContext(FeatureFlagsContext);
    if(!context) {
        throw new Error("useFeatureFlagsContext error");
    }

    return context;
}