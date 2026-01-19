import { useState } from "react";

import { useEnvironment } from "../providers/EnvironmentContext";
import { useAuth } from "../providers/UserRoleContext";
import { canToggleFlag } from "../entities/featureFlag/model/rules";
import { useFeatureFlagsContext } from "../providers/FeatureFlagsContext";

export const FeatureFlags = () => {
  const [visible, setVisible] = useState(true);
  const handleClickVisible = () => {
    setVisible(!visible);
  };

  const { environment } = useEnvironment();
  const { userRole } = useAuth();
  const featureFlags = useFeatureFlagsContext();

  const canToggle = canToggleFlag(userRole, environment);

  if (featureFlags.isLoading) return <div>Loading...</div>;
  if (featureFlags.error) return <div>Error loading flags</div>;

  return (
    <div className="p-6">
      <div className="cursor-pointer" onClick={handleClickVisible}>
        <h2 className="text-xl font-semibold mb-4">
          Feature Flags ({environment.toUpperCase()}) {visible ? '▲' : '▼'}
        </h2>
      </div>
      {visible && (<ul className="space-y-2">
        {featureFlags.flags.map((flag) => {
          const isEnabled = flag.environments?.[environment];
          return (
            <li
              key={flag.id}
              className="flex justify-between border p-3 rounded"
            >
              <span>{flag.key}</span>
              <button
                disabled={!canToggle}
                onClick={() => {
                  if(!canToggle) return;
                  featureFlags.toggleFlag(flag, environment);
                }}
                className={`px-3 
                  ${isEnabled ? "text-green-600" : "text-red-600"}
                  ${!canToggle && "opacity-50 cursor-not-allowed"}
                `}
              >
                {isEnabled ? "ON" : "OFF"}
              </button>
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
};
