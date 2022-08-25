import React from 'react'
import {Provider} from 'react-redux'
import reducers from 'reducers'
import {createStore} from 'redux'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return <Provider store={createStore(reducers, {})}>
        {props.children}
    </Provider>
}