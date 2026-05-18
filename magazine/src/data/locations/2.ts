import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 2,
  name: '大服一楼面包店',
  category: '面包·烘焙',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/2/1.jpeg`, caption: '半熟芝士' },
    { src: `${ASSETS_PATH}photos/2/2.jpeg`, caption: '奶油面包' },
    { src: `${ASSETS_PATH}photos/2/3.jpeg`, caption: '抹茶菠萝包' },
    { src: `${ASSETS_PATH}photos/2/4.jpeg`, caption: '面包柜' },
    { src: `${ASSETS_PATH}photos/2/5.jpeg`, caption: '奶油面包细节' },
    { src: `${ASSETS_PATH}photos/2/6.jpeg`, caption: '海盐芝士软欧' },
    { src: `${ASSETS_PATH}photos/2/7.jpeg`, caption: '软欧细节' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: 'p1半熟芝士五块钱，据店主说是面粉比较多的半熟芝士。外层有些芝士味，内部更接近于湿一些的戚风蛋糕。考虑到只卖五块钱，性价比还是比较高。p2-p5奶油面包+抹茶菠萝包，17r。两种面包内馅均为动物奶油，吃起来香而不甜。抹茶菠萝包抹茶味较浓，内部的奶油馅里还有些许红豆，锦上添花。两种面包都好吃。p6-p7海盐芝士软欧8r，麦香浓郁，松软咸香，一层微焦的深色脆壳提供了脆感与焦香。大量的芝士酱味道厚重，甚至喧宾夺主，吃到最后会很腻。我觉得去掉芝士酱会更好吃。'
    }
  ],
  address: '哈工大威海校区大服一楼',
  mapKeyword: '哈工大威海大学生服务楼',
}
