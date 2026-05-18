import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 15,
  name: '田野冰屋',
  category: '甜品·冰品',
  stars: 2,
  photos: [
    { src: `${ASSETS_PATH}photos/15/1.jpeg`, caption: '芒果牛奶冰' },
    { src: `${ASSETS_PATH}photos/15/2.jpeg`, caption: '抹茶刨冰' },
    { src: `${ASSETS_PATH}photos/15/3.jpeg`, caption: '松饼' },
    { src: `${ASSETS_PATH}photos/15/4.jpeg`, caption: '店内环境' },
    { src: `${ASSETS_PATH}photos/15/5.jpeg`, caption: '海水浴场风景' },
  ],
  reviews: [
    {
      reviewer: reviewers.yucao,
      reviewComment: '值得绕路前往的程度。芒果牛奶冰和抹茶刨冰做的不错，松饼一般，有点太甜了。我点的是芒果，芒果味道感觉稍微差一点点，不过上面的炼乳又救回来了，整体不错。店面就在海水浴场边上，风景很开阔舒畅，海水浴场的沙子质感比金海滩这边好，在这里好像可以当咖啡馆一样点一盘坐好久，消费30-40起步。'
    }
  ],
  address: '威海市环翠区高区国际海水浴场北环海路165-1-107',
  mapKeyword: '田野冰屋',
}
