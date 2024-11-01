import React, { PureComponent } from 'react'
import './style.css'

export class TabControl extends PureComponent {
  constructor() {
    super()

    this.state = {
      currentIndex: 0
    }
  }

  changeTab(index) {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const { tabs } = this.props
    const { currentIndex } = this.state
    
    return (
      <div>
        <ul className='list'>
          { 
            tabs.map(
              (item, index) => {
                return (
                  <li 
                    className={`item ${ index === currentIndex && 'active' }`} 
                    key={item}
                    onClick={ e => this.changeTab(index) }
                  >
                    <span>{ item }</span>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}

export default TabControl