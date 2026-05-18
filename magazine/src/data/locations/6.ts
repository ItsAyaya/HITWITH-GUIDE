import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 6,
  name: '香格里拉菌王府',
  category: '中餐·菌菇',
  stars: 2,
  photos: [
    { src: `${ASSETS_PATH}photos/6/1.jpeg`, caption: '松茸汽锅鸡' },
    { src: `${ASSETS_PATH}photos/6/2.jpeg`, caption: '汽锅鸡汤色' },
    { src: `${ASSETS_PATH}photos/6/3.jpeg`, caption: '松茸狮子头' },
    { src: `${ASSETS_PATH}photos/6/4.jpeg`, caption: '狮子头' },
    { src: `${ASSETS_PATH}photos/6/5.jpeg`, caption: '牛肝菌砂锅山药' },
    { src: `${ASSETS_PATH}photos/6/6.jpeg`, caption: '山药挂汁' },
    { src: `${ASSETS_PATH}photos/6/7.jpeg`, caption: '苦荞饼' },
    { src: `${ASSETS_PATH}photos/6/8.jpeg`, caption: '柠檬树蝶花' },
    { src: `${ASSETS_PATH}photos/6/9.jpeg`, caption: '米饭' },
    { src: `${ASSETS_PATH}photos/6/10.jpeg`, caption: '店内装潢' },
    { src: `${ASSETS_PATH}photos/6/11.jpeg`, caption: '一楼养生品区' },
    { src: `${ASSETS_PATH}photos/6/12.jpeg`, caption: '外观门面' },
    { src: `${ASSETS_PATH}photos/6/13.jpeg`, caption: '菜单' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '一家奇妙的老店，一楼卖养生品、玉器，二楼是饭店，装潢颇为奢华。菜品整体偏清淡。松茸汽锅鸡98r，招牌菜品，汤的鸡味、菌味都很浓，鲜甜可口，鸡肉香气很足，毫无腥味。松茸狮子头28r，口感绵软，有淡淡菌香。牛肝菌砂锅山药48r，咸甜适中，菌香仍在。苦荞饼2r一块，荞麦香气十足，香甜可口，非常好吃。柠檬树蝶花38r，口感像比较硬的银耳，酸甜口偏重。另外米饭出奇好吃，粒粒分明。推荐：苦荞饼、黑虎掌爆炒花菜、松茸狮子头、菌菇时蔬汤、松针菜。'
    }
  ],
  address: '威海市环翠区高区文化西路193-1号',
  mapKeyword: '文化西路',
}
