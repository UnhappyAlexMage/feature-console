import type { FeatureFlag } from "../../entities/featureFlag/model/types";

export function deleteFeatureFlag (
    flags: FeatureFlag[],
    id: string
) {
    return flags.filter((f) => f.id !== id);
}