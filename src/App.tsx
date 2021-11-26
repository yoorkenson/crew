import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';
import Editor from './pages/Editor';
// import Register from './pages/Register';
// import Crewwww from './pages/Crewwww';


function App() {
	const {setUser, setIsAuth} = useActions()

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setUser({username: localStorage.getItem('username' || '')} as IUser)
			setIsAuth(true)
		}
	}, [])

	return (
		<div className="App">
			<AppRouter/>
		</div>
	);
}

export default App;
