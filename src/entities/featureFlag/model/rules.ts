import type { Environment, UserRole, FeatureFlag } from "./types";

export function isFlagEnabled(
  flag: FeatureFlag,
  env: Environment
) : boolean {
  return flag.enabled && flag.environments[env]
};

export function canToggleFlag(
    role: UserRole,
    env: Environment
) : boolean {
    if(role === 'viewer') {return false};
    if(role === 'editor' && env === 'prod') {return false};
    return true;
};

export function filterFlags(
    flag: FeatureFlag[],
    search: string
) : FeatureFlag[] {
    const query = search.toLowerCase();

    return flag.filter(flag => flag.key.toLowerCase().includes(query));
}

export function getToggleForbiddenReason(
  role: UserRole,
  env: Environment
): string | null {
  if (role === 'viewer') {
    return 'Viewers cannot toggle feature flags'
  }

  if (role === 'editor' && env === 'prod') {
    return 'Editors cannot toggle flags in production'
  }

  return null
};

export function canCreateFlag(role: UserRole) {
  return role === 'editor' || role === 'admin';
}

export function canDeleteFlag(role: UserRole) {
  return role === 'admin';
}