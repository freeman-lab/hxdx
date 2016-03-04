var hxdx = require('./index.js')
var hx = hxdx.hx
var dx = hxdx.dx
var test = require('tape')
var redux = require('redux')

var reducer = function (state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

var store = redux.createStore(reducer, 0)

test('display', function (t) {
  var display = function (state) {
    return hx`<div id='display'>${state}</div>`
  }

  hxdx.render(display, store)

  var el = document.querySelector('#display')

  t.equal(el.innerHTML, '0')
  t.equal(el.id, 'display')
  t.end()
})

test('dispatch', function (t) {
  var display = function (state) {
    return hx`<div id='display'>${state}</div>`
  }

  var button = function (state) {
    function onclick () {
      dx({type: 'INCREMENT'})
    }
    return hx`<button id='button' onclick=${onclick}></button>`
  }

  var app = function (state) {
    return hx`<div>${display(state)}${button()}</div>`
  }

  hxdx.render(app, store)

  document.querySelector('#button').click()

  setTimeout(function () {
    var el1 = document.querySelector('#display')
    t.equal(el1.innerHTML, '1')
    t.end()
  }, 100)
})
