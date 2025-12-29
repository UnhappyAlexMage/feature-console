import { z } from 'zod';

export const EnvironmentSchema = z.object({
    dev: z.boolean(),
    stage: z.boolean(),
    prod: z.boolean()
});

export const UserRoleSchema = z.object({
    admin: z.boolean(),
    editor: z.boolean(),
    viewer: z.boolean() 
});

export const FeatureFlagDtoSchema = z.object({
    id: z.string(),
    key: z.string(),
    description: z.string().optional(),
    enabled: z.boolean(),
    environments: EnvironmentSchema,
    created_at: z.string()
})

export const FeatureFlagsDtoSchema = z.array(FeatureFlagDtoSchema);