import type { Location } from '@/types'
import { reviewers } from '../reviewers'

export const location: Location = {
  id: 5,
  name: '80后考场',
  category: '烧烤',
  stars: 2,
  photos: [],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '我晚上吃的这家，辣炒蚬子一盘8块，有点牛逼。'
    }
  ],
  address: '威海市环翠区塔山中路与路安街交叉口西北200米',
  mapKeyword: '塔山中路',
}
