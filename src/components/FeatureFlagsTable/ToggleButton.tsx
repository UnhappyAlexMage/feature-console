type ToggleButtonProps = {
    enabled: boolean,
    disabled: boolean,
    onToggle: () => void
}

export const ToggleButton = ({ enabled, disabled, onToggle } : ToggleButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onToggle}
            className={`p-3 py-1 rounded
                ${enabled ? 'bg-green-500' : 'bg-red-500'}
                ${disabled ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}
            `}>
                {enabled ? 'Edit' : 'Edit'}
        </button>
    );
}