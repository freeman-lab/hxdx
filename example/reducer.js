var reducer = function counter (state, action) {
  console.log('action:')
  console.log(action)
  console.log('state:')
  console.log(state)

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ENTER':
      return parseInt(action.value, 16) || 0
    default:
      return state
  }
}

module.exports = reducer
