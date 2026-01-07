import { useAuth } from "../../providers/UserRoleContext";
import { useUI } from "../../providers/UIContext";
import { canCreateFlag } from "../../entities/featureFlag/model/rules";

export default function CreateFeatureFlagButton () {
    const { userRole } = useAuth();
    const { openCreateModal } = useUI();

    return (
        <button className={!canCreateFlag(userRole) ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"} 
                onClick={openCreateModal}>
                    + Create Feature Flag
        </button>
    );
};