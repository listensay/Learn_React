import React, { PureComponent } from 'react'

export class index extends PureComponent {
    

  render() {
    const { left, center, right } = this.props

    return (
        <div className='navbar'>
            <div className="right">
                { right }
            </div>
            <div className="center">
                { center }
            </div>
            <div className="left">
                { left }
            </div>
        </div>
    )
  }
}

export default index