var hxdx = require('../index.js')
var redux = require('redux')
var reducer = require('./reducer')
var component = require('./component')

var dev = window.devToolsExtension ? window.devToolsExtension() : undefined
store = redux.createStore(reducer, 0, dev)

hxdx.render(component, store)