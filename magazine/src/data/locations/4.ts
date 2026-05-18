import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 4,
  name: '牛大碗滋味牛杂面',
  category: '面馆',
  stars: 2,
  photos: [
    { src: `${ASSETS_PATH}photos/4/1.jpeg`, caption: '秘制牛杂面' },
    { src: `${ASSETS_PATH}photos/4/2.jpeg`, caption: '口水鸡素菜双拼' },
    { src: `${ASSETS_PATH}photos/4/3.jpeg`, caption: '店内环境' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '秘制牛杂面15r，口水鸡素菜双拼15r。这家店的缺点是调味过于克制。口水鸡缺少复合香料带来的令人印象深刻的香气。牛肉面的汤底味道极淡，只能尝出一点点青花椒的香气，牛杂量少，且不入味。中规中矩。'
    }
  ],
  address: '威海市环翠区文化西路与德州中街交叉口东南160米',
  mapKeyword: '文化西路',
}
