type StatusCellProps = {
    enabled: boolean,
    disabled: boolean
};

export const StatusCell = ({ enabled, disabled } : StatusCellProps) => {
    const base = enabled ? 'text-green-600' : 'text-red-600';
    const opacity = disabled ? 'opacity-40' : '';

    return (
        <span className={`${base} ${opacity}`}>
            {enabled ? 'ON' : 'OFF'}
        </span>
    );
};