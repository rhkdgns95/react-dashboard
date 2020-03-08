import React from 'react';
import HomeProvider from './HomeProvider';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<any>{
    
}
const HomeContainer: React.FC<IProps> = ({ match: { path }}) => (
    <HomeProvider path={path}>
        <HomePresenter/>
    </HomeProvider>
);

const HomePresenter = () => <></>;

export default HomeContainer;