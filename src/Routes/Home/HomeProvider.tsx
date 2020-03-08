import React, { createContext, useContext, useEffect } from 'react';
import { useAppContext } from '../../Components/App/AppProvider';

interface IContext {

}

const InitContext: IContext = {};

const HomeContext: React.Context<IContext> = createContext(InitContext);

const useHomeContext = () => useContext(HomeContext);

const useFetch = (path: any): { value: IContext } => {
    const { handleChangeNavPath } = useAppContext();
    
    useEffect(() => {
        handleChangeNavPath(path);
    }, []);

    return {
        value: {

        }
    };
};

const HomeProvider: React.FC<any> = ({
    children,
    path
}) => (
    <HomeContext.Provider { ...useFetch(path) } >
        {
            children
        }
    </HomeContext.Provider>
);

export { useHomeContext };
export default HomeProvider;