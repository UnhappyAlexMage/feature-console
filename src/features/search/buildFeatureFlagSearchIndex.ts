import type { FeatureFlag } from "../../entities/featureFlag/model/types";
import { normalizeText } from "../../utils/normalizeText";

export function buildFeatureFlagSearchIndex (flags: FeatureFlag[]) {
    return flags.map(flag => ({
        id: flag.id,
        searchableText: normalizeText(`${flag.key} ${flag.description ?? ""}`),
    }));
};