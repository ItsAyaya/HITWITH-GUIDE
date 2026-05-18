import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 10,
  name: '张村冯家全羊（长江路店）',
  category: '羊肉·清真',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/10/1.jpeg`, caption: '小全羊' },
    { src: `${ASSETS_PATH}photos/10/2.jpeg`, caption: '干煸羊杂' },
    { src: `${ASSETS_PATH}photos/10/3.jpeg`, caption: '干煸羊杂细节' },
    { src: `${ASSETS_PATH}photos/10/4.jpeg`, caption: '大桌食材' },
    { src: `${ASSETS_PATH}photos/10/5.jpeg`, caption: '店内环境' },
    { src: `${ASSETS_PATH}photos/10/6.jpeg`, caption: '门面' },
    { src: `${ASSETS_PATH}photos/10/7.jpeg`, caption: '食材展示' },
    { src: `${ASSETS_PATH}photos/10/8.jpeg`, caption: '菜单' },
    { src: `${ASSETS_PATH}photos/10/9.jpeg`, caption: '全羊汤' },
    { src: `${ASSETS_PATH}photos/10/10.jpeg`, caption: '羊杂特写' },
    { src: `${ASSETS_PATH}photos/10/11.jpeg`, caption: '环境' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '威海老店，名副其实，人均30~60。店里很宽敞，迎面一张大桌子摆着不少食材。小全羊25r，羊杂羊肉量中规中矩，汤和肉味道都不错。干煸羊杂38r——油烧热下干辣椒、蒜片、葱爆香，放烧烤料、孜然粒、盐、糖、味精，下风干羊杂和尖椒炒到干香，放香菜翻炒两下出锅。风干后羊杂水分减少，香味格外突出，干煸后更有一层酥脆外壳，一口下去干香扑鼻，这道菜实在让人眼前一亮！还有一道特色鱼羊鲜据说很好吃。'
    }
  ],
  address: '威海市环翠区张村镇皂南台2号公寓',
  mapKeyword: '威海张村冯家全羊',
}
