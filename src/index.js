import React, { Fragment } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './Containers/App'

// css
import './index.css';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Fragment>
                <App />
            </Fragment>
        </ConnectedRouter>
    </Provider>,
    target
)