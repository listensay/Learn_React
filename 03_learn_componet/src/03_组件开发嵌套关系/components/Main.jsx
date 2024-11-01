import React, { PureComponent } from 'react'
import Banner from './Banner'
import ProductList from './ProductList'

export class Main extends PureComponent {
  render() {
    return (
      <div>
        <h2>Main</h2>
        <Banner />
        <ProductList />
      </div>
    )
  }
}

export default Main