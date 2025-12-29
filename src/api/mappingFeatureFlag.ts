//Маппинг — это процесс создания нового чистого объекта из «сырого» JSON.
//
import type { FeatureFlag } from "../entities/featureFlag/model/types";
import type { FeatureFlagDto } from "./types";

export function mapFeatureFlagDtoDomain(
    dto: FeatureFlagDto
) : FeatureFlag {
    return {
        id: dto.id,
        key: dto.key,
        description: dto.description,
        enabled: dto.enabled,
        environments: dto.environments,
        createdAt: dto.created_at,
    }
}