import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./style/theme";
import App from "./containers/app";
import './index.css'

ReactDOM.render(
    <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>
, document.getElementById('root'));
