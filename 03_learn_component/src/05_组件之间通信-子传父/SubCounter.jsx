import React, { PureComponent } from 'react'

export class SubCounter extends PureComponent {

  subCounter(counter) {
    console.log(counter)
    this.props.subCounterClick(counter)
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.subCounter(-1) }>-1</button>
        <button onClick={ () => this.subCounter(-5) }>-5</button>
        <button onClick={ () => this.subCounter(-10) }>-10</button>
      </div>
    )
  }
}

export default SubCounter