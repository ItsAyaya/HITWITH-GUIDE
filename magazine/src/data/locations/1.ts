import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 1,
  name: '项大娘米线',
  category: '米线',
  stars: 2,
  photos: [
    { src: `${ASSETS_PATH}photos/1/1.jpeg`, caption: '金黄酥香的现烤面包' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '新开那家项大娘米线挺好吃的。抖音9.9一张券，一碗米线+酸角汁，然后去小料台猛猛加料就完事了'
    }
  ],
  address: '威海市环翠区火炬高新技术产业开发区怡园街道文化西路38号-21',
  mapKeyword: '文化西路',
}
