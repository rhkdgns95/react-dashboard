import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './Styles/typed-components';
import theme from './Styles/theme';
import { GlobalStyles } from './Styles/GlobalStyles';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
    </ThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();