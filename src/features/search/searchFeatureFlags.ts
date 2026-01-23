// import type { FeatureFlag } from "../../entities/featureFlag/model/types";

export function searchFeatureFlags(
    // flags: FeatureFlag[],
    index: { id: string, searchableText: string }[],
    query: string
) {
    // if(!query) { return flags };
    if(!query) { return index.map(item => item.id) };

    // const normalizeQuery = query.toLowerCase();

    // return flags.filter((flag) => flag.key.includes(normalizeQuery) || flag.description?.includes(normalizeQuery));
    return index.filter(item => item.searchableText.includes(query)).map(item => item.id);
};