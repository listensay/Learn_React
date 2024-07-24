import React, { PureComponent } from 'react'
import Navbar from './Navbar'
import NavBar2 from './NavBar2'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Navbar>
            <div>菜单</div>
            <div>
                <h2>登陆</h2>
            </div>
            <div>搜索</div>
        </Navbar>

        <NavBar2 
            right={ <h2>123</h2> }
            center={ <strong>23</strong> }
            left={ 666 }
        />
      </div>
    )
  }
}

export default App