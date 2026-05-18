import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 13,
  name: '里口山铜火锅',
  category: '火锅',
  stars: 2,
  photos: [
    { src: `${ASSETS_PATH}photos/13/1.jpeg`, caption: '铜火锅与肉' },
  ],
  reviews: [
    {
      reviewer: reviewers.pepsi,
      reviewComment: '味道还行，88r两斤肉，肉质很鲜嫩而且价格实惠😋'
    }
  ],
  address: '威海市环翠区田和街道洪福庄园31-102综合楼一层南3号',
  mapKeyword: '铜火锅',
}
