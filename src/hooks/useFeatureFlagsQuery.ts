import { useQuery } from "@tanstack/react-query";
// import type { FeatureFlag } from "../entities/featureFlag/model/types";
import { fetchFeatureFlags } from "../api/featureFlag.api";
import type { FeatureFlagDto } from "../api/types";


export function useFeatureFlagsQuery() {
    return useQuery<FeatureFlagDto[], Error>({
        queryKey: ["featureFlags"],
        queryFn: fetchFeatureFlags,
    });
}