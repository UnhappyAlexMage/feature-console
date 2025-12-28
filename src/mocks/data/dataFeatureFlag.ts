import type { FeatureFlagDto } from "../../api/types";

export const featureFlagsMock: FeatureFlagDto[] = [
  {
    id: '1',
    key: 'new-dashboard',
    description: 'New admin dashboard',
    enabled: true,
    environments: {
      dev: true,
      stage: true,
      prod: false,
    },
    created_at: '2024-01-10T12:00:00Z',
  },
  {
    id: '2',
    key: 'beta-profile',
    description: 'Beta user profile',
    enabled: false,
    environments: {
      dev: true,
      stage: false,
      prod: false,
    },
    created_at: '2024-01-12T09:30:00Z',
  },
]