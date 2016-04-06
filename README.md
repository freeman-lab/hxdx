# hxdx

[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]

> simple connecter for state dispatching and rendering. 

Connects a `redux`-style store to a `virtual-dom`-style view and sets up rendering with minimal boilerplate. Works well with functional components that take state and sometimes dispatch. 

Exposes an `hx` function for constructing components elements, and a `dx` function for dispatching to the store within your components. Thus the name! Currently uses [`hyperx`](http://github.com/substack/hyperx) for defining components and [`main-loop`](http://github.com/Raynos/main-loop) for rendering. Doesn't require `redux`, just something that acts as a state store.

I wrote this because I love the `redux` design pattern, but found the `react-redux` bindings, and `react` in general, big and complex and hard to reason about. If you care about performance those are supposed to be much faster!

See also
- [`virtual-app`](https://github.com/sethvincent/virtual-app) related idea with different dependencies
- [`redux-react`](https://github.com/reactjs/react-redux) official connector for using redux with react

## install

```
npm install hxdx
```

## example

Set up a simple `redux` store with one action

```javascript
var reducer = function (state, action) {
 switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

var store = require('redux').createStore(reducer, 0)
```

Then create your components (normally these would be in separate files)

We'll make one that renders

```javascript
var display = function (state) {
  return hx`<div>${state}</div>`
}
```

And one that dipatches

```javascript
var button = function (state) {
  function onclick () {
    dx({type: 'INCREMENT'})
  }
  return hx`<button onclick=${onclick}>+</button>`
}
```

Then just render your top-level component using the store

```javascript
var app = function (state) {
  return hx`<div>${display(state)}${button()}</div>`
}

hxdx.render(app, store)
```

and the DOM will be updated using diffing on every click.

## api

#### `hxdx.render(component, store, [root])`

Render a component and connect it to a store.

- `component` function mapping state to a virtual dom element
- `store` a state store with `subscribe`, `dispatch`, and `getState` methods
- `root` a base DOM element to append to (if undefined will appemd to body)

Store can be able object that follows the [`redux`](https://github.com/reactjs/redux) API.

#### `hxdx.hx('<>')`

Tagged template function for generating `virtual-dom` elements. Can be required inside any of your components.

#### `hxdx.dx(action)`

Dispatch action to the store. Can be required inside any of your components.

[npm-image]: https://img.shields.io/badge/npm-v1.0.0-lightgray.svg?style=flat-square
[npm-url]: https://npmjs.org/package/hxdx
[standard-image]: https://img.shields.io/badge/code%20style-standard-lightgray.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
