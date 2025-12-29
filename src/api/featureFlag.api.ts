//Реализуем для того, чтобы получить массив объектов из API
import type { FeatureFlagDto } from "./types";
import { FeatureFlagsDtoSchema } from "./featureFlags.schema";

export async function fetchFeatureFlags() : Promise<FeatureFlagDto[]> {
    const response = await fetch('/api/featureflags');

    if(!response.ok) {
        throw new Error('Failed to fetch feature flags');
    }

    const data = await response.json();

    const parsed = FeatureFlagsDtoSchema.safeParse(data);

    if(!parsed.success) {
        console.error(parsed.error);
        throw new Error('Invalid feature flags dtata');
    }

    return parsed.data;
}