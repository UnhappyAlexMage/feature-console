import { useState } from "react";
import { useFeatureFlagsContext } from "../providers/FeatureFlagsContext";
import { searchFeatureFlags } from "../features/search/searchFeatureFlags";

export function useFeatureFlagSearch () {
    const featureFlags = useFeatureFlagsContext();
    const [search, setSearch] = useState("");

    const filteredFlags = searchFeatureFlags(featureFlags.flags, search);

    return {
        search,
        setSearch,
        filteredFlags
    }
}