const hxdx = require('../../../index')
const hx = hxdx.hx
const connect = hxdx.connect

const greeting = require('./greeting.js')

function list (state) {
  function greetings () {
    return state.greetings.map(function (word) {
      return hx`<li>${word}${greeting()}</li>`
    })
  }

  return hx`
    <ul id="greetings">${greetings()}</ul>
  `
}

module.exports = connect({ greetings: 'greetings' }, list)
