export type Environment = 'dev' | 'stage' | 'prod';
export type UserRole = 'admin' | 'editor' | 'viewer';

export interface FeatureFlag {
    id: string
    key: string
    description?: string
    enabled: boolean
    environments: Record<Environment, boolean>
    createdAt: string
};

export type UpdateFeatureFlagBody = {
    environment: Environment;
    enabled: boolean;
};

export type CreateFeatureFlagForm = {
    key: string,
    description?: string
};

export interface FeatureFlagSearchItem {
    id: string
    searchableText: string
};