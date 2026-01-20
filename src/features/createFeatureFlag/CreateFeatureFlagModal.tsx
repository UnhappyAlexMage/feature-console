import { useUI } from "../../providers/UIContext"
import { useFeatureFlagsContext } from "../../providers/FeatureFlagsContext";
import { createFeatureFlag } from "./createFeatureFlag"
import type { CreateFeatureFlagForm } from "../../entities/featureFlag/model/types";

import { useForm } from "react-hook-form";

export const CreateFeatureFlagModal = () => {
    const { isCreateModalOpen, closeCreateModal } = useUI();
    const featureFlags = useFeatureFlagsContext();
    const { register, handleSubmit, reset } = useForm<CreateFeatureFlagForm>();

    if(!isCreateModalOpen) return null;

    const onSubmit = (data: CreateFeatureFlagForm) => {
        featureFlags.addFlag(createFeatureFlag(data));
        reset();
        closeCreateModal();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-[420]">
                <h2 className="text-lg font-semibold mb-4 text-black">Create Feature Flag</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <input 
                        className="border p-2 w-full text-black"
                        placeholder="Feature key"
                        {...register('key', {required: true})} 
                    />
                    <textarea
                        className="border p-2 w-full text-black"
                        placeholder="Description (optional)"
                        {...register('description')} 
                    />
                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            className="text-white bg-red-500 px-3 py-1 rounded"
                            onClick={closeCreateModal}
                        >Cancel</button>
                        <button 
                            type="submit"
                            className="text-white bg-green-500 px-3 py-1 rounded"
                        >Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};