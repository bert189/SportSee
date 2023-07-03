import React, { createContext, useState } from "react";

const DataSourceContext = createContext();

const DataSourceProvider = ({ children }) => {
    const [dataSourceIsAPI, setDataSourceIsAPI] = useState(false);
    
    const toggleDataSource = () => {
        setDataSourceIsAPI(!dataSourceIsAPI);
    };

    const contextValue = {
        dataSourceIsAPI,
        toggleDataSource,
    };

    return (
        <DataSourceContext.Provider value={contextValue}>
            {children}
        </DataSourceContext.Provider>
    );
};

export { DataSourceContext, DataSourceProvider };
