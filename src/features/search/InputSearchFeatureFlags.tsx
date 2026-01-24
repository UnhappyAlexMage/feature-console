
type Props = {
    search: string,
    setSearch: (value: string) => void
};

export const InputSeacrhFeatureFlags = ({ search, setSearch }: Props) => {

    return (
        <input 
            type="text"
            placeholder="Search feature flags"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-2 py-1 rounded h-12 w-full"
        />
    )
};