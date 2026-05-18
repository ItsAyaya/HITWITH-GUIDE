import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 7,
  name: '哈工大南门板面·特色羊杂面',
  category: '面馆',
  stars: 3,
  photos: [
    { src: `${ASSETS_PATH}photos/7/1.jpeg`, caption: '招牌羊杂面' },
    { src: `${ASSETS_PATH}photos/7/2.jpeg`, caption: '羊杂分量' },
    { src: `${ASSETS_PATH}photos/7/3.jpeg`, caption: '免费小菜' },
    { src: `${ASSETS_PATH}photos/7/4.jpeg`, caption: '面藕特写' },
    { src: `${ASSETS_PATH}photos/7/5.jpeg`, caption: '店内环境' },
    { src: `${ASSETS_PATH}photos/7/6.jpeg`, caption: '门面' },
  ],
  reviews: [
    {
      reviewer: reviewers.lingmeng,
      reviewComment: '南门外其貌不扬的一家小店，老板掌勺，老板娘打杂，夫妻二人感情和睦，服务热情周到。小菜0r！尤其推荐面藕、辣白菜和萝卜，酸甜开胃。招牌羊杂面13r，羊杂实属不少，加钱买"精品"档羊杂几乎能盖住面条。汤底浓郁，面条筋道爽滑，羊杂香气四溢，一点不腥。加上几勺辣椒油，香上加香。不够辣可以找老板要特辣辣椒油。如果我微信里只剩下13块钱，我一定会认为这是上天在指引我来这里大吃一顿。'
    }
  ],
  address: '威海市环翠区高区青州南街12号富贵园',
  mapKeyword: '板面羊杂面',
}
