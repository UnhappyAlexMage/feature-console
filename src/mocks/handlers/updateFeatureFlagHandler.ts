import { http, HttpResponse } from "msw";
import { featureFlagsMock } from "../data/dataFeatureFlag";
import type { UpdateFeatureFlagBody } from "../../entities/featureFlag/model/types";

export const updateFeatureFlagHandler = http.patch(
    "api/featureflags/:id",
    async ({ params, request }) => {
        const { id } = params;
        const body = await request.json() as UpdateFeatureFlagBody;

        const flag = featureFlagsMock.find((f) => f.id === id);
        if(!flag) {
            return HttpResponse.json({ message: "Not Found" }, {status: 404});
        }

        flag.environments[body.environment] = body.enabled;

        return HttpResponse.json(flag);
    }
)