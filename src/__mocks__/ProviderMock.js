// Debe de incluir a los elementos que son muy similares a la estructura 
// del index (redux, store, provider )
import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

const store= createStore(reducer, initialState);
const history= createBrowserHistory();

const ProviderMock = props =>(
    // necesita el store para poder proveer
    <Provider store={store}>
        {/* simula la navegacion de las rutas, utiliza 
        history para pasar el history de las rutas */}
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
)
export default ProviderMock