import type { FeatureFlag, Environment } from "./types";

export function getFlagStatus (
    flag: FeatureFlag,
    environment: Environment
) : boolean {
    return flag.environments[environment];
}