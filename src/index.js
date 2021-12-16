import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from './App';
import reportWebVitals from './reportWebVitals';
import todoListReducer from "./reducers/todoListReducer";
import './index.css';

const store = createStore(todoListReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
