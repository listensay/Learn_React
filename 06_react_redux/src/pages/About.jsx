import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from '../store/actionCreators'

export class About extends PureComponent {
  render() {
    const { counter, addNumber, subNumber, banners, recommends } = this.props

    return (
      <div>
        <h2>About Page: { counter }</h2>
        <button onClick={ e => addNumber(400) }>+400</button>
        <button onClick={ e => subNumber(400) }>-400</button>

        <div>
          <h2>轮播图</h2>
          <ul>
            { 
              banners.map((item, index) => {
                return <li key={index}>{ item.title }</li>
              })
            }
          </ul>
        </div>
        <div>
          <h2>推荐</h2>
          <ul>
            { 
              recommends.map((item, index) => {
                return <li key={index}>{ item.title }</li>
              })
            }
          </ul>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
})

const mapDiapatchToProps = (dispatch) => ({
  addNumber: (num) => (dispatch(addNumberAction(num))),
  subNumber: (num) => (dispatch(subNumberAction(num)))
})

export default connect(mapStateToProps, mapDiapatchToProps)(About)