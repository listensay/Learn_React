import React, { PureComponent } from 'react'
import HelloWorld from './HelloWorld'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      state: true
    }
  }

  // 组件挂载到DOM时运行
  componentDidMount() {
    console.log('组件rander执行完毕时运行 App ComponentDidmount')
  }

  switchComponent() {
    const state = !this.state.state
    this.setState({
      state
    })
  }

  render() {
    const { state } = this.state

    return (
      <div>
        <div>App</div>
        { state && <HelloWorld /> }
        <button onClick={ e => this.switchComponent() }>切换</button>
      </div>
    )
  }
}

export default App