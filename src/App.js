import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import './css/reset.css';
import './css/App.css';


function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>		
	);

}


export default App;
