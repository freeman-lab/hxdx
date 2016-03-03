# hxdx

Super simple connecter for state dispatching and rendering. Connects a `redux`-like store to a `virtual-dom` and sets up rendering with minimal boilerplate. Works well with purely functional components that take in state and sometimes dispatch. 

Exposes an `hx` function for constructing components elements, and a `dx` function for dispatching to the store within your components. Thus the name! Uses `hyperx` for defining components and `main-loop` for rendering.

I wrote this because I love the `redux` design pattern, but found the `react-redux` bindings, and `react` in general, big and complex and hard to reason about. If you care about performance those are probably much better!

See also
- `virtual-app` related idea with different dependencies
- `redux-react` official connector for using redux with react

## install

```
npm install hxdx
```

## example

Let's say you have a `redux`-like store and want to pass its state to functional `virtual-dom` components, some of which dispatch. 

With `hxdx`, you can write components for pure display

```javascript
var hx = require('hxdx').hx

module.exports = function (state) {
  return hx`<div><${state}</div>`
}
```

and others that dispatch to the store

```javascript
var hx = require('hxdx').hx
var dx = require('hxdx').dx

module.exports = function (state) {
  function onclick () {
    dx({type: 'INCREMENT'})
  }
  return hx`<button onclick=${onclick}>+</button>`
}
```

Then just connect your top-level component and store

```javascript
var hxdx = require('hxdx')
hxdx.render(component, store)
```

And the DOM will be updated using diffing on every dispatch.

## api

##### hxdx.render(component, store, [root])

Render a `virtual-dom` component and connect it to a `redux`-like store. All child components can use `dx` to dispatch to the store.

##### `hx('<>')`

Tagged template function for generating `virtual-dom` elements.

##### `dx(action)`

Dispatch action to the store.

