import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import SideBar from '../side/SideBar';

function Template() {
	return (
		<>
			<Header />
			<div className="side-main-wrapper">
				<SideBar />
				<Outlet />
			</div>	
		</>
	);
}

export default Template;