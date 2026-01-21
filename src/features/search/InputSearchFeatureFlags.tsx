import { useFeatureFlagSearch } from "../../hooks/useFeatureFlagSearch";

export const InputSeacrhFeatureFlags = () => {
    const { search, setSearch } = useFeatureFlagSearch();
    return (
        <input 
            type="text"
            placeholder="Search feature flags"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-2 py-1 rounded w-full"
        />
    )
};