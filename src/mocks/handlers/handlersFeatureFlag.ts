import { http, HttpResponse } from 'msw';
import { featureFlagsMock } from '../data/dataFeatureFlag';

export const responseFeatureFlag = () => {
    return HttpResponse.json(featureFlagsMock);
}

export const handlerFeatureFlag = http.get("/api/featureflags", responseFeatureFlag);