import { useAuth } from "../../providers/UserRoleContext";
import { canDeleteFlag } from "../../entities/featureFlag/model/rules";

type Props = {
    id: string,
    disabled?: boolean,
    onDelete: (id: string) => void,
};

export const DeleteFeatureFlagButton = ({ id, disabled, onDelete }: Props) => {
    const { userRole } = useAuth();
    const isCanDelete = !canDeleteFlag(userRole);
    const finalDisabled = isCanDelete || disabled;

    return (
        <button
            disabled={finalDisabled}
            className={finalDisabled ? "opacity-40 cursor-not-allowed'" : "hover:opacity-80"}
            onClick={() => {
                if(confirm('Delete feature flag?')) {
                    onDelete(id);
                }
            }}>
                Delete
        </button>
    );
};
