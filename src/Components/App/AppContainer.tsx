import React from 'react';
import AppProvider from "./AppProvider";

const AppContainer = () => (
    <AppProvider>
        <AppPresenter />
    </AppProvider>
);

const AppPresenter = () => (
    <>
        hi
    </>
)

export default AppContainer;