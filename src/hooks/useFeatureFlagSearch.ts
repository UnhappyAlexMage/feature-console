import { useState, useMemo } from "react";
import { useFeatureFlagsContext } from "../providers/FeatureFlagsContext";
import { searchFeatureFlags } from "../features/search/searchFeatureFlags";
import { useDebouncedValue } from "./useDebouncedValue";
import { normalizeText } from "../utils/normalizeText";
import { buildFeatureFlagSearchIndex } from "../features/search/buildFeatureFlagSearchIndex";

export function useFeatureFlagSearch () {
    const featureFlags = useFeatureFlagsContext();
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebouncedValue(search, 500);
    const normalizeQuery = normalizeText(debouncedSearch);

    // const filteredFlags = searchFeatureFlags(featureFlags.flags, debouncedSearch);

    // const filterSearchState = useMemo(() => {
        
    // if(!debouncedSearch) {
    //     return featureFlags.flags;
    // }
    
    // return filteredFlags;

    // }, [debouncedSearch, filteredFlags]);

    const searchIndex = useMemo(
        () => buildFeatureFlagSearchIndex(featureFlags.flags), [featureFlags.flags]
    );

    const matchedIds = useMemo(
        () => searchFeatureFlags(searchIndex, normalizeQuery), [searchIndex, normalizeQuery]
    );
    
    const filterSearchState = useMemo(
        () => featureFlags.flags.filter(flag => matchedIds.includes(flag.id)), 
        [featureFlags.flags, matchedIds]
    );

    return {
        search,
        setSearch,
        filterSearchState
    };
};