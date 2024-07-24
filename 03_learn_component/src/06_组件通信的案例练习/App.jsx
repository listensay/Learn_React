import React, { PureComponent } from 'react'
import TabControl from './TabControl'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {
            tabs: ['流行', '热门', '精选'],
            currentIndex: 0
        }
    }

    changeIndex(index) {
        this.setState({
            currentIndex: index
        })
    }
  render() {
    const {tabs, currentIndex} = this.state

    return (
      <div>
        <TabControl tabs={ tabs } setIndex={i => this.changeIndex(i)} />
        <h2>{ tabs[currentIndex] }</h2>
      </div>
    )
  }
}

export default App