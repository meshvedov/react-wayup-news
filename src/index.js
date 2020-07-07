import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import App from './components/App'

import reducers from './store/reducers'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
   , document.getElementById( 'root' ) )