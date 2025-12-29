import { useEnvironment } from "../providers/EnvironmentContext";
import { useFeatureFlags } from "../hooks/useFeatureFlags";
import { useState } from "react";

export const FeatureFlags = () => {
  const [visible, setVisible] = useState(false);
  const handleClickVisible = () => {
    setVisible(!visible);
  };

  const { environment } = useEnvironment();
  const { featureFlags, loading, error } = useFeatureFlags();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading flags</div>;

  return (
    <div className="p-6">
      <div className="cursor-pointer" onClick={handleClickVisible}>
        <h2 className="text-xl font-semibold mb-4">
          Feature Flags ({environment.toUpperCase()}) {visible ? '▲' : '▼'}
        </h2>
      </div>
      {visible && (<ul className="space-y-2">
        {featureFlags.map((flag) => {
          const isEnabled = flag.environments?.[environment];
          return (
            <li
              key={flag.id}
              className="flex justify-between border p-3 rounded"
            >
              <span>{flag.key}</span>
              <span className={isEnabled ? "text-green-600" : "text-red-600"}>
                {isEnabled ? "ON" : "OFF"}
              </span>
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
};
