import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 8,
  name: '阿朱腊汁肉夹馍',
  category: '陕西小吃',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/8/1.jpeg`, caption: '米皮+肉夹馍' },
    { src: `${ASSETS_PATH}photos/8/2.jpeg`, caption: '米皮特写' },
    { src: `${ASSETS_PATH}photos/8/3.jpeg`, caption: '肉夹馍特写' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '饭点必排队，含金量不用多说。腊汁肉夹馍+小份米皮14r。米皮是正宗陕西做法，没有麻酱，筋道香气扑鼻。腊汁肉夹馍用的是白吉馍，有面香。肉量中规中矩，但肉香、卤香都很足，而且没有青椒。性价比极高。极好的店，和旁边的秦陕缘可谓卧龙凤雏。'
    }
  ],
  address: '威海市环翠区哈工大青州南街12-14号',
  mapKeyword: '阿朱腊汁肉夹馍',
}
