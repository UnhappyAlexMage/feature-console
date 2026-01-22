import { useState } from "react";
import { useFeatureFlagsContext } from "../providers/FeatureFlagsContext";
import { searchFeatureFlags } from "../features/search/searchFeatureFlags";
import { useDebouncedValue } from "./useDebouncedValue";
import { useMemo } from "react";

export function useFeatureFlagSearch () {
    const featureFlags = useFeatureFlagsContext();
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebouncedValue(search, 500);

    const filteredFlags = searchFeatureFlags(featureFlags.flags, debouncedSearch);

    const filterSearchState = useMemo(() => {
        
    if(!debouncedSearch) {
        return featureFlags.flags;
    }
    
    return filteredFlags;

    }, [debouncedSearch, filteredFlags]);
      
    return {
        search,
        setSearch,
        filterSearchState
    };
};