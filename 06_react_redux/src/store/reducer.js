import * as actionType from './constants'

const init = {
  counter: 100,
  recommends: [],
  banners: []
}

function reducer(state = init, action) {
  switch(action.type) {
    case actionType.SUB_NUMBER_TYPE:
      return {
        ...state,
        counter: state.counter - action.num
      }

    case actionType.ADD_NUMBER_TYPE:
      return {
        ...state,
        counter: state.counter + action.num
      }
    case actionType.BANNERS_TYPE:
      return {
        ...state,
        banners: action.banners
      }
    case actionType.RECOMMENDS_TYPE:
      return {
        ...state,
        recommends: action.recommends
      }

    default:
      return state
  }
}

export default reducer