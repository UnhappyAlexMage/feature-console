// DTO (Data Transfer Object) — это интерфейс, который строго описывает, 
// в каком виде данные прилетают из API.
import { z } from "zod";
import { FeatureFlagDtoSchema, FeatureFlagsDtoSchema } from "./featureFlags.schema";

// export interface FeatureFlagDto {
//     id: string,
//     key: string,
//     description?: string,
//     enabled: boolean,
//     environments: {
//         dev: boolean,
//         stage: boolean,
//         prod: boolean
//     }
//     created_at: string
// }

export type FeatureFlagDto = z.infer<typeof FeatureFlagDtoSchema>;
export type FeatureFlagsDto = z.infer<typeof FeatureFlagsDtoSchema>;