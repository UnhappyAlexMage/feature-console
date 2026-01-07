import { useUI } from "../../providers/UIContext"
import { useFeatureFlags } from "../../hooks/useFeatureFlags"
import { createFeatureFlag } from "./createFeatureFlag"
import type { CreateFeatureFlagForm } from "../../entities/featureFlag/model/types";

import { useForm } from "react-hook-form";

import { Fragment } from "react/jsx-runtime";

export const CreateFeatureFlagModal = () => {
    const { closeCreateModal } = useUI();
    const { addFlag } = useFeatureFlags();
    const { register, handleSubmit } = useForm<CreateFeatureFlagForm>();

    const onSubmit = (data: CreateFeatureFlagForm) => {
        addFlag(createFeatureFlag(data));
        closeCreateModal();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('key')} />
                <textarea {...register('description')} />
                <button type="submit"></button>
            </form>
        </Fragment>
    );
};