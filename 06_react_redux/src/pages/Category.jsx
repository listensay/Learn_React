import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeDataAction } from '../store/actionCreators'

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeData()
  }

  render() {
    return (
      <div>
        <h2>Category</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData: () => dispatch(fetchHomeDataAction())
})

export default connect(null, mapDispatchToProps)(Category)