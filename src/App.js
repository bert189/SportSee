
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import './css/reset.css';
import './css/App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<SideBar />
				<Dashboard />
			</main>	
		</div>
	);
}

export default App;
