import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 3,
  name: '学子一楼面包店',
  category: '面包·烘焙',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/3/1.jpeg`, caption: '菠萝包' },
    { src: `${ASSETS_PATH}photos/3/2.jpeg`, caption: '菠萝包外观' },
    { src: `${ASSETS_PATH}photos/3/3.jpeg`, caption: '抹茶红豆' },
    { src: `${ASSETS_PATH}photos/3/4.jpeg`, caption: '内部组织' },
    { src: `${ASSETS_PATH}photos/3/5.jpeg`, caption: '整体展示' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '菠萝包和抹茶红豆一共16r。菠萝包的卖相惊艳，外壳酥松，甜度正好，黄油香浓郁。内部的巨大气孔使得它吃起来相当松软。单纯从技巧角度，它远超大服一楼的菠萝包。抹茶红豆一般，抹茶味太淡，全被红豆掩盖了。'
    }
  ],
  address: '哈工大威海校区学子餐厅一楼',
  mapKeyword: '哈工大威海南门',
}
