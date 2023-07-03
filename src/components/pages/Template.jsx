import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import SideBar from '../side/SideBar';
import { DataSourceProvider } from '../../contexts/DataSourceContext';

function Template() {
	return (
		<>
			<Header />
			<div className="side-main-wrapper">
				<SideBar />
				<DataSourceProvider>
					<Outlet />
				</DataSourceProvider>
			</div>	
		</>
	);
}

export default Template;