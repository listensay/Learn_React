import React, { PureComponent } from 'react'
import MainProductList from './MainProductList'
import MainBanner from './MainBanner'

export class Main extends PureComponent {
  render() {
    return (
      <div>
        <MainBanner />
        <MainProductList />
      </div>
    )
  }
}

export default Main