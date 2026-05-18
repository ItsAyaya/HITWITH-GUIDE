import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 12,
  name: '陈记炸货凉拌菜',
  category: '凉拌菜·小吃',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/12/1.jpeg`, caption: '凉拌菜' },
    { src: `${ASSETS_PATH}photos/12/2.jpeg`, caption: '炸货' },
    { src: `${ASSETS_PATH}photos/12/3.jpeg`, caption: '摊位' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '凉拌菜是自选称重，价格不贵，我买这些14块钱。拌菜是酸甜口的，但是不太甜。味道不错。缺点是绿叶蔬菜种类少了一点，只有苦菊和生菜。'
    }
  ],
  address: '威海金海滩市集',
  mapKeyword: '威海金海滩市集陈记炸货',
}
