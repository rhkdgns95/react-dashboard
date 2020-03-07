import React from 'react';
import AppProvider from "./AppProvider";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Routes/Home';

const AppContainer = () => (
    <AppProvider>
        <AppPresenter />
    </AppProvider>
);

const AppPresenter = () => (
    <BrowserRouter>
        <Switch>
            <Route path={"/"} component={Home}/>
            <Redirect from={"*"} to={"/"}/>
        </Switch>
    </BrowserRouter>    
)

export default AppContainer;