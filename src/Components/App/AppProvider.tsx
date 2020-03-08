import React, { createContext, useContext, useState } from 'react';
import NavBar from '../NavBar';

interface IContext {
    navPath: string;
    handleChangeNavPath: (newPath: string) => any;
}

const InitContext: IContext = {
    navPath: "",
    handleChangeNavPath: () => {}
};

const AppContext: React.Context<IContext> = createContext(InitContext);

const useAppContext = () => useContext(AppContext);

const useFetch = (): { value: IContext } => {
    const [ navPath, setNavPath ] = useState<string>("");
    
    const handleChangeNavPath = (newPath: string) => {
        setNavPath(newPath);
    };

    return {
        value: {
            navPath,
            handleChangeNavPath
        }
    }
};

const AppProvider: React.FC<any> = ({ children }) => (
    <AppContext.Provider { ...useFetch() }>
        <NavBar />
        {
            children
        }
    </AppContext.Provider>
);

export { useAppContext };
export default AppProvider;