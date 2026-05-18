import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 9,
  name: '衢州鸭头',
  category: '卤味',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/9/1.jpeg`, caption: '鸭腿' },
    { src: `${ASSETS_PATH}photos/9/2.jpeg`, caption: '菜卷' },
    { src: `${ASSETS_PATH}photos/9/3.jpeg`, caption: '素菜拼盒' },
    { src: `${ASSETS_PATH}photos/9/4.jpeg`, caption: '门面' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '第一次见这家店是在线下，当时刚在帝王宫看完电影，往学校走的时候看到了这家不大的小店。外卖品质和到店买一致。他家对于香料的运用十分精妙，卤香十足。鸭腿12r，相当入味，肉香卤香交织，一点也不柴，可以说是我吃过最好吃的鸭腿。菜卷4r，卤千张卷香葱和香菜，单独吃千张会有点咸，里面的菜正好中和了咸度。素菜拼盒10r，各种素菜拼一起，很脆很好吃。正常的外卖量会比图中大一些。'
    }
  ],
  address: '威海市环翠区青州街134-9号',
  mapKeyword: '威海帝王宫衢州鸭头',
}
