import { useAuth } from "../../providers/UserRoleContext";
import { useUI } from "../../providers/UIContext";
import { canCreateFlag } from "../../entities/featureFlag/model/rules";

export function CreateFeatureFlagButton () {
    const { userRole } = useAuth();
    const { openCreateModal } = useUI();
    const canCreate = canCreateFlag(userRole);

    return (
        <button
            type="button"
            disabled={!canCreate}
            className={`px-1 mt-6  ${!canCreate ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"}`} 
            onClick={() => openCreateModal()}>
                + Create Feature Flag
        </button>
    );
};