var assign = require('object-assign')

var reducer = function (state, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return assign({}, state, { name: action.name })
    default:
      return state
  }
}

module.exports = reducer
