# 梦环翠海指南（HITWITH GUIDE）

基于 Vue 3 + Vite 的电子杂志站点，聚焦「哈工大威海校区周边美食」的实地探访内容。页面采用双页翻阅形式，并支持一键导出 A4 PDF。

## 功能亮点

- 封面 / 目录 / 跨页内容 / 尾页完整杂志结构
- 店铺评分、地址与评论展示
- 图片缩略图与支持自由切换的灯箱查看模式
- 一键导出 PDF（客户端渲染）

## 技术栈

- Vue 3
- Vite
- TypeScript
- UnoCSS
- html2canvas + jsPDF

## 本地运行

```bash
cd magazine
npm install
npm run dev
```

浏览器访问终端提示的本地地址即可。

## 目录结构与资源存储

项目对店铺数据进行了解耦，确保每个人即便不懂代码也能轻松添加内容：
- `magazine/src/data/locations/`：存放每个店铺的独立数据配置文件（以店铺 ID 命名，如 `1.ts`）
- `magazine/src/data/reviewers.ts`：所有评论写手的统一信息登记（定义昵称与头像关联）
- `magazine/public/photos/<id>/`：每个店铺对应的实拍高清图片存放目录
- `magazine/public/avatars/`：存放评论者的头像源文件

---

## 📝 如何新增新店铺（详细指南）

如果你探访了一家新店并希望分享到《梦环翠海指南》中，只需按照以下 4 个步骤进行极简操作（假设即将添加的新店铺 ID 是 `16`）：

### 第一步：添加店铺实拍图片（可选）
1. 在 `magazine/public/photos/` 目录下，新建一个名为该店铺 ID 的文件夹（例如 `16` 文件夹）。
2. 将实拍图片放进该文件夹中（推荐以 `1.jpeg`, `2.jpeg` 命名排好序，并尽量压缩下体积）。
> *注：如果没有实拍图片也可以不用建文件夹。*

### 第二步：添加或确认评论者作者
如果你是第一次在这个项目里写评价：
1. 把你的头像图片放到 `magazine/public/avatars/` 目录下，比如命名为 `your_name.jpg`。
2. 在 `magazine/src/data/reviewers.ts` 中注册你的作者信息，加上这段代码：
   ```ts
   your_name: {
     name: '你的中文昵称',
     avatar: getAvatar('your_name')
   }
   ```
> *注：如果作者之前已经存在（在此前留过言），此步跳过即可。*

### 第三步：新增店铺配置文件（核心步骤 ✨）
在 `magazine/src/data/locations/` 目录下创建一个与店铺 ID 同名的新文件（例如 `16.ts`），将下方标准模板复制进去，根据实际情况进行修改填空：

```typescript
import type { Location } from '@/types'
import { reviewers } from '../reviewers'

const ASSETS_PATH = import.meta.env.BASE_URL

export const location: Location = {
  id: 16,                                    // 必须保证数字唯一且不重复
  name: '新店铺名称',                           // 店铺名称，如："哈工大南门板面"
  category: '分类标签',                         // 菜系分类，如："面馆" / "海鲜"
  stars: 3,                                  // 推荐指数：最高3，最低1
  photos: [
    // 每加一张图片写一行 src。如果没有图片，将整个括号里的内容删空即可留 [] 
    { src: `${ASSETS_PATH}photos/16/1.jpeg`, caption: '照片描述（可选填写）' },
    { src: `${ASSETS_PATH}photos/16/2.jpeg`, caption: '' }
  ],
  reviews: [
    {
      reviewer: reviewers.your_name,         // 从 reviewers 中选取这篇评价对应作者
      reviewComment: '这里是客观具体的评价正文，可以尽量详细记录下个人的真实探店体验。'
    }
  ],
  address: '店铺的线下实际地址文本',             // 如："文化西路与XX街交叉口"
  mapKeyword: '用于跳转高德搜索的关键字',        // 为了确保能搜出地点的高德定位检索词
}
```
得益于构建时的自动扫描支持，只要您保存了这个 `16.ts` 配置文件，系统会自动帮您重新排版并添加到杂志对应的最新页面去！

### 第四步：本地预览与提交
保存后，在控制台保持 `npm run dev` 运行的状态下在浏览器里刷新一下，查看新页面的排版效果并检查错别字。如一切没问题，即可 `commit` 并发起 PR / 推送。

---

## 构建与部署

```bash
cd magazine
npm run build
npm run preview
```
*(注意：目前项目配置了 `build.rollupOptions` 分包与图片懒加载，优化了生产服务器（如 Github Pages）上的访问加载速度。)*

## PDF 导出

页面右上角点击「导出 PDF」即可生成完整杂志文件（默认文件名：`梦环翠海指南-HITWITH-GUIDE.pdf`）。目前是纯客户端绘制。

## 致谢

加入社群快一年了，能为社群做一点小贡献对我来说是件很开心的事，望大家每天开心，探索美食，吃好喝好。
