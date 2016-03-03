var hx = require('bel')

var dx

module.exports = {
  dx: function (action) {    
    dx(action)
  },

  hx: hx,
  
  render: function (el, store) {
    dx = store.dispatch

    var rendered = el(store.getState())
    document.body.appendChild(rendered)

    function update () {
      rendered.update(el(store.getState()))
    }

    store.subscribe(update)
  }
}  