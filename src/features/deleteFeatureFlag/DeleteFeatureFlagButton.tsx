import { useAuth } from "../../providers/UserRoleContext";
import { useFeatureFlags } from "../../hooks/useFeatureFlags";
import { canDeleteFlag } from "../../entities/featureFlag/model/rules";

type Props = {
    id: string,
    disabled: boolean
};

export const DeleteFeatureFlagButton = ({ id, disabled }: Props) => {
    const { userRole } = useAuth();
    const { removeFlag } = useFeatureFlags();
    const isCanDelete = !canDeleteFlag(userRole);
    const finalDisabled = isCanDelete || disabled;
    return (
        <button
            className={finalDisabled ? "opacity-40 cursor-not-allowed'" : "hover:opacity-80"}
            onClick={() => {
                if(confirm('Delete feature flag?')) {
                    removeFlag(id);
                }
            }}>
                Delete
        </button>
    );
};
