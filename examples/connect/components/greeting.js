const hxdx = require('../../../index')
const hx = hxdx.hx
const connect = hxdx.connect

function greeting (state) {
  return hx`
    <span id="greeting">${state.name}</span>
  `
}

module.exports = connect({ name: 'name' }, greeting)

