import React, { PureComponent } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App