type ToggleButtonProps = {
    enabled: boolean,
    disabled: boolean,
    onToggle: () => void
}

export const ToggleButton = ({ enabled, disabled, onToggle } : ToggleButtonProps) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onToggle}
            className={`p-3 py-1 rounded text-white font-medium transition-all
                ${enabled ? 'bg-green-500' : 'bg-red-500'}
                ${disabled ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}
            `}>
                {enabled ? 'Active' : 'Inactive'}
        </button>
    );
}