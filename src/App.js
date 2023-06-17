
import Header from './components/Header';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import './css/reset.css';
import './css/App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<SideBar />
				<HomePage />
			</main>	
		</div>
	);
}

export default App;
