import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';
import Editor from './pages/Editor';
// import Register from './pages/Register';
// import Crewwww from './pages/Crewwww';


function App() {

	const {getProfileInfo} = useActions();

	useEffect(() => {
		getProfileInfo()
	})
	
	return (
		<div className="App">
			<AppRouter/>
		</div>
	);
}

export default App;
