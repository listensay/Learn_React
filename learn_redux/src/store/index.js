const { createStore } = require('redux')

const initialState = {
  count: 0
}

function reducer() {
  return initialState
}

const store = createStore(reducer)

module.exports = store