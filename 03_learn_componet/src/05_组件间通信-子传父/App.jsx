import React, { PureComponent } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  changeNumber(counter) {
    const sum = this.state.counter + counter
    this.setState({
      counter: sum
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>计数器: { counter }</h2>
        <AddCounter addClick={ (e) => this.changeNumber(e) }/>
        <SubCounter subClick={ (e) => this.changeNumber(e) }/>
      </div>
    )
  }
}

export default App