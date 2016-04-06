var forEach = require('lodash.foreach')
var test = require('tape')
var redux = require('redux')

var hxdx = require('../index.js')
var hx = hxdx.hx

var name = require('../examples/connect/components/name')
var list = require('../examples/connect/components/list')
var reducer = require('../examples/connect/reducer')

var store = redux.createStore(reducer, {
  name: 'Hello',
  greetings: [
    'Hello, ',
    'Shalom, ',
    'Hola, '
  ]
})

test('connect-wrapper', function (t) {
  var wrapper = function (state) {
    return hx`
    <div>
      <div>${name()}</div>
      <div>${list()}</div>
    </div>
    `
  }

  hxdx.render(wrapper, store)

  var el = document.querySelector('#name')

  t.equal(el.value, 'Hello')
  t.equal(el.id, 'name')
  t.end()
})

test('connect-dispatch', function (t) {
  var wrapper = function (state) {
    return hx`
    <div>
      <div>${name()}</div>
      <div>${list()}</div>
    </div>
    `
  }

  hxdx.render(wrapper, store)

  var el = document.querySelector('#name')
  t.equal(el.value, 'Hello')
  el.value = 'World'
  t.equal(el.value, 'World')
  el.oninput({ target: { value: el.value } })

  setTimeout(function () {
    var items = document.querySelectorAll('#greeting')
    forEach(items, function (item) {
      if (item.innerHTML !== 'World') {
        t.fail(item.innerHTML + ' !== ' + 'World')
      }
    })
    t.pass('all greeting names were equal to World')
    t.end()
  }, 2000)
})
