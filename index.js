var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var hx = hyperx(vdom.h)

var dx

module.exports = {
  dx: function (action) {    
    dx(action)
  },

  hx: hx,
  
  render: function (el, store) {
    console.log(el)
    dx = store.dispatch

    var main = require('main-loop')
    var loop = main(store.getState(), render, vdom)

    document.body.appendChild(loop.target)

    function render (state) {
      return el(state)
    }

    function update () {
      loop.update(store.getState())
    }

    store.subscribe(update)
  }
}  