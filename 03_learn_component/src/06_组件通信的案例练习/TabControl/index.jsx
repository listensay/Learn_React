import React, { PureComponent } from 'react'
import './style.css'

export class index extends PureComponent {
    constructor() {
        super()

        this.state = {
            currentIndex: 0
        }
    }

    changeTab(index) {
        this.props.setIndex(index)
        this.setState({
            currentIndex: index
        })
    }
  render() {
    const { tabs } = this.props
    const { currentIndex } = this.state

    return (
        <ul className='tab-control'>{
            tabs.map((item, index) => {
                return (
                    <li className='item' onClick={ () => this.changeTab(index) }>
                        <span className={`${ index === currentIndex ? 'active' : '' }`}>{ item }</span>
                    </li>
                )
            })
        }</ul>
    )
  }
}

export default index