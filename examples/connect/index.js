const hxdx = require('../../index.js')
const hx = hxdx.hx
const redux = require('redux')
const reducer = require('./reducer')

const name = require('./components/name')
const list = require('./components/list')

var store = redux.createStore(reducer, {
  name: null,
  greetings: [
    'Hello, ',
    'Shalom, ',
    'Hola, '
  ]
})

var wrapper = function (state) {
  return hx`
  <div>
    <div>${name()}</div>
    <div>${list()}</div>
  </div>
  `
}

hxdx.render(wrapper, store)
