import React, { PureComponent } from 'react'

export class HelloWorld extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: 'Hello World'
    }
    console.log('Hello World Constructor')
  }

  changeMessage() {
    this.setState({
      message: 'Hello React'
    })
  }

  // 监听组件变化
  componentDidUpdate() {
    console.log('HelloWorld 组件发生了变化 componentDidUpdate')
  }

  // 监听组件是否被移除
  componentWillUnmount() {
    console.log('HelloWorld 组件被移除 componentWillUnmount')
  }

  render() {
    const { message } = this.state
    console.log('Hello World Rander')
    
    return (
      <div>
        { message }
        <div>
          <button onClick={ e => this.changeMessage() }>修改文本</button>
        </div>
      </div>
    )
  }
}

export default HelloWorld