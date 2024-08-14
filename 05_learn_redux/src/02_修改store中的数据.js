const store = require('./store')

console.log(store.getState())

// 定义一个Action
const nameAction1 = { type: 'changeName', name: 'milk' }

// 派发nameAction1
store.dispatch(nameAction1)
console.log(store.getState())

// 派发2
const nameAction2 = { type: 'changeName', name: 'kobe' }
store.dispatch(nameAction2)
console.log(store.getState())

// 修改count
const count = { type: 'changeCount', count: 1000 }
store.dispatch(count)
console.log(store.getState())