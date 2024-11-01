import React, { PureComponent } from 'react'

export class ProductList extends PureComponent {
  render() {
    const { title, products } = this.props

    return (
      <div>
        <h3>{ title }</h3>
        <ul>
          {
            products.map(item => <li key={item}>{ item }</li> )
          }
        </ul>
      </div>
    )
  }
}

export default ProductList