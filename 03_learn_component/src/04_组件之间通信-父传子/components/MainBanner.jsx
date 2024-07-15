import React, { PureComponent } from 'react'

export class MainBanner extends PureComponent {
  render() {
    const { banners } = this.props

    return (
      <div>
        <h2>我是轮播图</h2>
        <ul>
          {
            banners.map(item => <li key={item}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default MainBanner