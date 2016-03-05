var _ = require('lodash')
var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var hx = hyperx(vdom.h)

var dx, globalStore

const filterState = function (mapping, state) {
  if (!mapping) {
    return state
  }
  const pairs = _.map(mapping, function (path, prop) { return [prop, _.get(state, path)] })
  return _.fromPairs(pairs)
}

module.exports = {
  dx: function (action) {
    dx(action)
  },

  hx: hx,

  connect: function (mapping, comp) {
    return function () {
      return comp(filterState(mapping, globalStore.getState()))
    }
  },

  render: function (el, store, root) {
    globalStore = store
    dx = store.dispatch

    var main = require('main-loop')

    var loop = main(store.getState(), render, vdom)

    if (root) root.appendChild(loop.target)
    else document.body.appendChild(loop.target)

    function render (state) {
      return el(state)
    }

    function update () {
      loop.update(store.getState())
    }

    store.subscribe(update)
  }
}
