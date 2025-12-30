import type { Environment } from "../entities/featureFlag/model/types";

export async function updateFeatureFlagApi(
    id: string,
    environment: Environment,
    enabled: boolean
) {
   const response = await fetch(`/api/featureflags/${id}`, {
        method: "PATCH",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ environment, enabled }),
   });

   if(!response.ok) {
        throw new Error("Failed to update flag");
   }

   return response.json();
}