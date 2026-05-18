import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 14,
  name: '兰州牛肉拉面·大盘鸡',
  category: '清真·面食·烧烤',
  stars: 2,
  photos: [
    { src: `${ASSETS_PATH}photos/14/1.jpeg`, caption: '店面' },
    { src: `${ASSETS_PATH}photos/14/2.jpeg`, caption: '羊肉串与拉面' },
  ],
  reviews: [
    {
      reviewer: reviewers.wuhai,
      reviewComment: '坐标西南门外南100m的店。环境还不错，有方桌也有靠墙的单人桌。点了两个羊肉串和一小份牛肉拉面。面条默认加红油，但红油的辣味微乎其微。羊肉串6元一串，分量还算可以，默认不辣，吃起来是真羊肉（比威高负一楼神秘的4元科技串好太多）。店里有免费茶和白水。总体评价：没什么减分项，适合路过吃一顿或者确实想吃羊肉串了就来吃点。'
    }
  ],
  address: '威海市环翠区怡园街道德州中街金海滩花园9-3-8',
  mapKeyword: '兰州牛肉拉面·大盘鸡',
}
