import React, { PureComponent } from 'react'

export class AddCounter extends PureComponent {
    addCounterHandle(counter) {
        console.log('this counter', counter)
        this.props.addCounterClick(counter)
    }

  render() {
    return (
      <div>
        <button onClick={ () => this.addCounterHandle(1) }>+1</button>
        <button onClick={ () => this.addCounterHandle(5) }>+5</button>
        <button onClick={ () => this.addCounterHandle(10) }>+10</button>
      </div>
    )
  }
}

export default AddCounter