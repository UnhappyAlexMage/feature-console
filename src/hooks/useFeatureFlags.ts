// entities/featureFlag/hooks/useFeatureFlags.ts
import { useEffect, useState } from 'react'
import { fetchFeatureFlags } from '../api/featureFlag.api'
import { mapFeatureFlagDtoDomain } from '../api/mappingFeatureFlag'
import type { FeatureFlag } from '../entities/featureFlag/model/types'

export function useFeatureFlags() {
  const [data, setData] = useState<FeatureFlag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchFeatureFlags()
            .then((dtoList) => {
                console.log('DTO LIST:', dtoList)
                return dtoList.map(mapFeatureFlagDtoDomain)
            })
            .then((domain) => {
                console.log('DOMAIN LIST:', domain)
                setData(domain)
            })
            .catch((err) => {
                console.error('ERROR IN useFeatureFlags:', err)
                setError('Failed to load feature flags')
            })
            .finally(() => setLoading(false))
    }, [])

  return {
    featureFlags: data,
    loading,
    error,
  }
}
