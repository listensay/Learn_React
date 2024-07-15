import React, { PureComponent } from 'react'
import MainProductList from './MainProductList'
import MainBanner from './MainBanner'

export class Main extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        '热门商品',
        '最新商品',
        '促销商品',
        '推荐商品'
      ],
      banners: [
        '轮播图1',
        '轮播图2',
        '轮播图3',
        '轮播图4',
        '轮播图5'
      ]
    }
  }
  render() {
    const { productList, banners } = this.state

    return (
      <div>
        <MainBanner banners={banners} />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main