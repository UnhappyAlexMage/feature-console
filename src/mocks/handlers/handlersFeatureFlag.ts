import { http, HttpResponse } from 'msw';
import { featureFlagsMock } from '../data/dataFeatureFlag';

export const responseFeatureFlag = () => {
    return HttpResponse.json(featureFlagsMock, {status: 200});
}

export const handlerFeatureFlag = http.get("/api/featureflags", responseFeatureFlag);