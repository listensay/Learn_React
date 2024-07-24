import React, { PureComponent } from 'react'
import './style.css'

export class index extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <div className='navbar'>
        <div className="right">
            { children[0] }
        </div>
        <div className="center">
            { children[1] }
        </div>
        <div className="left">
            { children[2] }
        </div>
      </div>
    )
  }
}

export default index