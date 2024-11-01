import React, { PureComponent } from 'react'
import TabControl from './TabControl'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      tabs: ['流行', '新款', '精选']
    }
  }

  render() {
    const { tabs } = this.state

    return (
      <div>
        <TabControl tabs={ tabs } />
      </div>
    )
  }
}

export default App