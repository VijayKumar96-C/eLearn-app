import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom' 
import { Provider } from 'react-redux';
import App from './Components/App'
import configureStore from './Store/configureStore';

const store = configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log("store",store.getState())
})

ReactDOM.render(<Provider store={store} >
    <BrowserRouter><App /></BrowserRouter>
    </Provider>,document.getElementById('root')
);

