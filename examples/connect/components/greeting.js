const hxdx = require('../../../index')
const hx = hxdx.hx
const connect = hxdx.connect

function greeting (state) {
  return hx`
    <span>${state.name}</span>
  `
}

module.exports = connect({ name: 'name' }, greeting)

