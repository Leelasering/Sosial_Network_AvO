import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/Redux_Store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

//addPost('Hellow, world!')
//let rerenderEntireTree=(state)=>{
//
//}
//

//rerenderEntireTree(store.getState());

//store.subscribe(() => {
//    let state = store.getState();
//    rerenderEntireTree(state);
//});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
serviceWorker.unregister();
