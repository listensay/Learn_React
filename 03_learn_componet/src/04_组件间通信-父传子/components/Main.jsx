import React, { PureComponent } from 'react'
import Banner from './Banner'
import ProductList from './ProductList'

export class Main extends PureComponent {
  constructor() {
    super()

    this.state = {
      title: '我是标题',
      banners: ['轮播图1', '轮播图2', '轮播图3'],
      products: ['轮播图1', '轮播图2', '轮播图3'],
    }
  }

  render() {
    const { title, banners, products } = this.state

    return (
      <div>
        <h2>Main</h2>
        <Banner title={ title } banners={ banners } />
        <ProductList  title={ title } products={ products } />
      </div>
    )
  }
}

export default Main