import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 11,
  name: '哈尔滨特色烤冷面',
  category: '小吃',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/11/1.jpeg`, caption: '烤冷面' },
    { src: `${ASSETS_PATH}photos/11/2.jpeg`, caption: '制作过程' },
    { src: `${ASSETS_PATH}photos/11/3.jpeg`, caption: '门面' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '一家笑起来很慈祥的老奶奶开的店，物美价廉。烤冷面味道正宗，很好吃！点烤冷面的时候一定要告诉奶奶要酸甜口的！烤冷面不做酸甜口不好吃。'
    }
  ],
  address: '哈工大威海校区西南门外',
  mapKeyword: '哈工大威海西南门烤冷面',
}
