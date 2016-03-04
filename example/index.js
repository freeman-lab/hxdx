var hxdx = require('../index.js')
var redux = require('redux')
var reducer = require('./reducer')
var component = require('./component')

var store = redux.createStore(reducer, 0)

hxdx.render(component, store, root)
