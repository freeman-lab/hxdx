const hxdx = require('../../../index')
const hx = hxdx.hx
const dx = hxdx.dx
const connect = hxdx.connect

function name (state) {
  function updateName (event) {
    dx({
      type: 'UPDATE_NAME',
      name: event.target.value
    })
  }

  return hx`
    <input id="name" type="text" value="${state.name || ''}" oninput=${updateName}>
  `
}

module.exports = connect({ name: 'name' }, name)
