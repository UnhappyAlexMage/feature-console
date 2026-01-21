import type { FeatureFlag } from "../../entities/featureFlag/model/types";

export function searchFeatureFlags(
    flags: FeatureFlag[],
    query: string
) : FeatureFlag[] {
    if(!query) { return flags };

    const normalizeQuery = query.toLowerCase();

    return flags.filter((flag) => flag.key.includes(normalizeQuery) || flag.description?.includes(normalizeQuery));
};