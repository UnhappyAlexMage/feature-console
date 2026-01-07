import type { FeatureFlag } from "../../entities/featureFlag/model/types";
import type { CreateFeatureFlagForm } from "../../entities/featureFlag/model/types";

export function createFeatureFlag(
    data: CreateFeatureFlagForm 
) : FeatureFlag {
    return {
        id: crypto.randomUUID(),
        key: data.key,
        description: data.description,
        enabled: false,
        environments: {
            dev: false,
            stage: false,
            prod: false,
        },
        createdAt: new Date().toISOString(),
    };
};