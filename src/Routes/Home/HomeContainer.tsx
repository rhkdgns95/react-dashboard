import React from 'react';
import HomeProvider from './HomeProvider';

const HomeContainer = () => (
    <HomeProvider>
        <HomePresenter/>
    </HomeProvider>
);

const HomePresenter = () => <>Home</>;

export default HomeContainer;