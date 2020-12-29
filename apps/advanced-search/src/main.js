import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #fbfbfb;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
