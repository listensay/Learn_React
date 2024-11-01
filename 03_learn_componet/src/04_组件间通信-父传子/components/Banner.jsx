import React, { PureComponent } from 'react'

export class Banner extends PureComponent {
  render() {
    const { banners, title } = this.props

    return (
      <div>
        <h3>{ title }</h3>
        <ul>
          { banners.map(item => <li key={item}>{ item }</li> ) }
        </ul>
      </div>
    )
  }
}

export default Banner