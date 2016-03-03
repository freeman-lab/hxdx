var hxdx = require('../../index.js')
var redux = require('redux')
var reducer = require('./reducer')
var component = require('./component')

store = redux.createStore(reducer)

hxdx.render(component, store)