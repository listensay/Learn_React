const store = require('./store')

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: 'changeName', name: 'milk' })
store.dispatch({ type: 'changeName', name: 'kobe' })
store.dispatch({ type: 'changeCount', count: 1000 })