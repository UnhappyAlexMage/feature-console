import { useFeatureFlags } from "../../hooks/useFeatureFlags";
import { useAuth } from "../../providers/UserRoleContext";
import { useEnvironment } from "../../providers/EnvironmentContext";
import { getFlagStatus } from "../../entities/featureFlag/model/selectors";
import { canToggleFlag } from "../../entities/featureFlag/model/rules";
import { StatusCell } from "./StatusCell";
import { ToggleButton } from "./ToggleButton";
import { toggleFlag } from "../../features/toggleFlag";

export default function TableFeatures() {
    const { flags } = useFeatureFlags();
    const { environment } = useEnvironment();
    const { userRole } = useAuth();

    const canToggle = canToggleFlag(userRole, environment);

    return (
        <table className="w-full border border-gray-300 rounded-lg">
            <thead className="border-t">
                <tr className="bg-gray-100">
                    <th className="p-4 text-center font-semibold w-1/4 text-black">Feature</th>
                    <th className="p-4 text-center font-semibold w-1/4 text-black">Description</th>
                    <th className="p-4 text-center font-semibold w-1/4 text-black">Status</th>
                    <th className="p-4 text-center font-semibold w-1/4 text-black">Actions</th>
                </tr>
            </thead>
            <tbody className="">
                {flags.map((flag) => {
                    const enabled = getFlagStatus(flag, environment);
                    return (
                        <tr key={flag.key} className="border-t">
                            <td className="p-2 text-center">{flag.key}</td>
                            <td className="p-2 text-center">{flag.description ?? '-'}</td>
                            <td className="p-2 text-center">
                                <StatusCell 
                                    enabled={enabled}
                                    disabled={!canToggle}
                                />
                            </td>
                            <td className="p-2 space-x-2 text-center">
                                <ToggleButton 
                                    enabled={enabled}
                                    disabled={!canToggle}
                                    onToggle={() => toggleFlag(flag, environment)}
                                />
                            </td>
                        </tr>)
                    })}
            </tbody>
        </table>
    );
};