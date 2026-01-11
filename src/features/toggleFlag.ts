import { toggleFeatureFlag } from "../entities/featureFlag/model/action";
import { updateFeatureFlagApi } from "../api/updateFeatureFlag.api";
import type { Environment, FeatureFlag } from "../entities/featureFlag/model/types";

export async function toggleFlag(
    flag: FeatureFlag,
    environment: Environment
) : Promise<FeatureFlag> {
    const updated = toggleFeatureFlag(flag, environment);

    await updateFeatureFlagApi(
        flag.id,
        environment,
        updated.environments[environment]
    );

    return updated;
};