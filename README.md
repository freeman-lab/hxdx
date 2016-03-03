# hxdx

Super simple connecter for state dispatching and virtual dom updates.

## install

```
npm install hxdx
```

## example

Let's say you have a `redux` store and want to write a bunch of `virtual-dom`components. With `hxdx`, you can write components as either display only

```javascript
var hx = require('hxdx').hx

module.exports = function (state) {
  return hx`<div><${state}</div>
  `
}
```

Or with actions that dispatch to the store

```javascript
var hx = require('hxdx').hx
var dx = require('hxdx').dx

module.exports = function (state) {
  function onclick () {
    dx({type: 'INCREMENT'})
  }
  return hx`<button onclick=${onclick}>+</button>
  `
}
```

Then just connect your top-level component and store in one-line

```javascript
var hxdx = require('hxdx')
hxdx.render(component, store)
```

And the DOM will be updated with diffing on every dispatch.