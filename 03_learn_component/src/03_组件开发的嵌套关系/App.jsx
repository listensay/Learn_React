import React, { PureComponent } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export class App extends PureComponent {

  constructor(props) {
    super()
    this.state = {
      message: 'App Component'
    }

  }
  render() {
    const { message } = this.state

    return (
      <div>
        <h1>{message}</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App