var hx = require('../index').hx
var dx = require('../index').dx

module.exports = function (state) {
  function increment () {
    dx({type: 'INCREMENT'})
  }

  function decrement () {
    dx({type: 'DECREMENT'})
  }

  return hx`
  <div><span style=${{fontSize: '24px'}}>value: ${state}</span><br>
  <button onclick=${increment}>+</button>
  <button onclick=${decrement}>-</button>
  </div>
  `
}