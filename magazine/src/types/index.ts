/** 照片 */
export interface Photo {
  src: string
  width?: number
  height?: number
  caption?: string
  isScreenshot?: boolean
}

/** 评论者 */
export interface Reviewer {
  name: string;
  avatar: string;
}

/** 评论 */
export interface Review {
  reviewer: Reviewer;
  reviewComment: string;
}

/** 地点 */
export interface Location {
  id: number
  name: string
  category: string
  stars: number
  photos: Photo[]
  reviews: Review[]
  address: string
  mapKeyword: string
  coordinates?: [number, number]
}
