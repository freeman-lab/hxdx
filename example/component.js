var hx = require('../index').hx
var dx = require('../index').dx

module.exports = function (state) {
  function increment () {
    dx({type: 'INCREMENT'})
  }

  function decrement () {
    dx({type: 'DECREMENT'})
  }

  function onchange () {
    dx({type: 'ENTER', value: document.querySelector('#input').value})
  }

  return hx`
  <div><span style=${{fontSize: '24px'}}>value: ${state}</span><br><br>
  <span>add/subtract:</span><br>
  <button onclick=${increment}>+</button>
  <button onclick=${decrement}>-</button><br><br>
  <span>enter a value:</span><br>
  <input id='input' onchange=${onchange}>
  </div>
  `
}