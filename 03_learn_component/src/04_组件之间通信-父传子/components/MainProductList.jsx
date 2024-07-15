import React, { PureComponent } from 'react'

export class MainProductList extends PureComponent {
  render() {

    const { productList } = this.props

    return (
      <div>
        <h2>我是商品列表</h2>
        <ul>
          {productList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default MainProductList