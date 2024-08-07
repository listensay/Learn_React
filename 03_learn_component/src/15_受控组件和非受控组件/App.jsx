import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  // 表单处理函数
  submitHandle = (event) => {
    // 阻止默认行为
    event.preventDefault()

    // 获取表单数据
    console.log(event.target.username.value)
  }

  // 表单数据处理函数
  changeHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <form onSubmit={ e => this.submitHandle(e) }>
          <label htmlFor="username">
            用户名: 
            <input 
              type="text"
              name='username'
              id="username"
              value={ username }
              onChange={ e => this.changeHandle(e) }
            />
          </label>

          <label htmlFor="password">
            密码: 
            <input 
              type="text"
              name='password'
              id="password"
              value={ password }
              onChange={ e => this.changeHandle(e) }
            />
          </label>
          <button>注册</button>
        </form>
      </div>
    )
  }
}

export default App