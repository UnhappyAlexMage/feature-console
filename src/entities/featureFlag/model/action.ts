import type { FeatureFlag, Environment } from "./types";

export function toggleFeatureFlag(
    flag: FeatureFlag,
    environment: Environment
) : FeatureFlag {
    return {
        ...flag,
        environments: {
            ...flag.environments,
            [environment]: !flag.environments[environment],
        },
    };
}
