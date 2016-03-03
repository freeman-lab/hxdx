var reducer = function counter (state, action) {
  if (typeof state === 'undefined') state = 0

  console.log('action:')
  console.log(action)
  console.log('state:')
  console.log(state)

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

module.exports = reducer
