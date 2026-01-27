import { useEffect, useState } from "react";
import type { FeatureFlag } from "../entities/featureFlag/model/types";
import { fetchFeatureFlags } from "../api/featureFlag.api";
import { toggleFeatureFlag } from "../entities/featureFlag/model/action";
import { updateFeatureFlagApi } from "../api/updateFeatureFlag.api";
import type { Environment } from "../entities/featureFlag/model/types";
import { mapFeatureFlagDtoDomain } from "../service/mappingFeatureFlag";
import { loadFromStorage } from "../shared/lib/localStorage";

export function useFeatureFlags() {
  const [flags, setFlags] = useState<FeatureFlag[]>(() => {
    const stored = loadFromStorage<FeatureFlag[]>("feature-flags");
    return stored ?? []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // if(flags.length > 0) return;
    
    fetchFeatureFlags()
      .then((dtos) => dtos.map(mapFeatureFlagDtoDomain))
      .then(setFlags)
      .catch(() => setError("Failed to load feature flags"))
      .finally(() => setIsLoading(false));
  }, []);

  function toggleFlag(
    flag: FeatureFlag,
    environment: Environment
  ) {
    const updated = toggleFeatureFlag(flag, environment);

    setFlags((prev) =>
      prev.map((f) => (f.id === flag.id ? updated : f))
    );

    try {
      updateFeatureFlagApi(
        flag.id,
        environment,
        updated.environments[environment]
      );
    } catch {
      setFlags((prev) =>
        prev.map((f) => (f.id === flag.id ? flag : f))
      );
    }
  }

  const addFlag = (flag: FeatureFlag) => {
    setFlags((prev) => [...prev, flag]);
  };

  const removeFlag = (id: string) => {
    setFlags((prev) => prev.filter((flag) => flag.id !== id));
  };

  return {
    flags,
    isLoading,
    error,
    toggleFlag,
    addFlag,
    removeFlag
  };
}
