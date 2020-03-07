import React, { createContext, useContext } from 'react';

interface IContext {

}

const InitContext: IContext = {};

const AppContext: React.Context<IContext> = createContext(InitContext);

const useAppContext = () => useContext(AppContext);

const useFetch = (): { value: IContext } => {

    return {
        value: {

        }
    }
};

const AppProvider: React.FC<any> = ({ children }) => (
    <AppContext.Provider { ...useFetch() }>
        {
            children
        }
    </AppContext.Provider>
);

export { useAppContext };
export default AppProvider;