import React, { PureComponent } from 'react'

export class SubCounter extends PureComponent {
  submitCounter(counter) {
    this.props.subClick(counter)
  }

  render() {
    return (
      <div>
        <button onClick={ e => this.submitCounter(-1) }>-1</button>
        <button onClick={ e => this.submitCounter(-5) }>-5</button>
        <button onClick={ e => this.submitCounter(-10) }>-10</button>
      </div>
    )
  }
}

export default SubCounter