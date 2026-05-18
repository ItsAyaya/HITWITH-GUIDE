import type { Reviewer } from '@/types'

const ASSETS_PATH = import.meta.env.BASE_URL

function getAvatar(name: string) {
  return `${ASSETS_PATH}avatars/${name}.jpg`
}

export const reviewers: Record<string, Reviewer> = {
  lingmeng: {
    name: '灵梦',
    avatar: getAvatar('lingmeng')
  },
  pepsi: {
    name: 'pepsi',
    avatar: getAvatar('pepsi')
  },
  wuhai: {
    name: '五海',
    avatar: getAvatar('wuhai')
  },
  yucao: {
    name: '雨草',
    avatar: getAvatar('yucao')
  }
}
