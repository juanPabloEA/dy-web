import React from 'react';
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux'
import ShopStore from './store/shop/ShopStore.jsx'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={ShopStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

