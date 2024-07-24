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


    changeCounter(counter) {
        this.setState({
            counter: this.state.counter + counter
        })
    }

  render() {
    
    const { counter } = this.state
    return (
      <div>
        <h2>
            当前计数: { counter }
        </h2>

        <AddCounter addCounterClick={ (counter) => { this.changeCounter(counter) } }/>
        <SubCounter subCounterClick={ (counter) => { this.changeCounter(counter) } } />
      </div>
    )
  }
}

export default App