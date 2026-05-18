import type { Location } from '@/types'

// 自动收集 locations 目录下的所有配置，按照配置的 id 进行排序
const locationModules = import.meta.glob('./locations/*.ts', { eager: true }) as Record<string, { location: Location }>

export const locations: Location[] = Object.values(locationModules)
  .map(mod => mod.location)
  .sort((a, b) => a.id - b.id)

export function getLocationById(id: number): Location | undefined {
  return locations.find(l => l.id === id)
}
