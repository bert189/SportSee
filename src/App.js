import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import './css/reset.css';
import './css/App.css';

import Header from './components/header/Header';
import SideBar from './components/side/SideBar';
import HomePage from './components/pages/HomePage';

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>		
	);

	// return (
	// 	<div className='App'>
	// 		<Header />
	// 		<main className="main">
	// 			<SideBar />
	// 			<HomePage />
	// 		</main>	
	// 	</div>
	// );
}


export default App;
