import React, { useContext } from 'react';
import { DataSourceContext } from '../../contexts/DataSourceContext';
import { Link } from 'react-router-dom';



function DataSourceSwitch() {

    const { dataSourceIsAPI, toggleDataSource } = useContext(DataSourceContext);


    return (
        <div className="switch-wrapper">
            <h3>Choississez l'origine des données utilisateur :</h3>
            <div className='toggle-switch'>
                <span onClick={toggleDataSource} className={ dataSourceIsAPI ? "" : 'source-selected' }>données mockées</span>
                <span onClick={toggleDataSource} className={ dataSourceIsAPI ? 'source-selected' : ""}>API</span>
            </div>
            <p>API : Lancer <Link to="https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard" target="_blank">P9-front-end-dashboard</Link></p>

        </div>

    )
}

export default DataSourceSwitch;
