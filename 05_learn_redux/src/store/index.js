const { createStore } = require('redux')

const initialState = {
  count: 0,
  name: 'codermilk'
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'changeName':
      return {
        ...state,
        name: action.name
      }
    case 'changeCount':
      return {
        ...state,
        count: action.count
      }

    default: 
      return state
  }
}

const store = createStore(reducer)

module.exports = store