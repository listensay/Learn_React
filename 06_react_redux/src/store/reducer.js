import * as actionType from './constants'

const init = {
  counter: 100
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

    default:
      return state
  }
}

export default reducer