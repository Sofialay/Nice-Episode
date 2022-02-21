import React, { useEffect, useState } from 'react'
import LoginPage from './components/LoginPage/LoginPage'
import Home from './components/Home/Home'
// import axios from 'axios'
import './components/styles/main.scss'
import './App.css'

// lsof -n -i :3000 | grep LISTEN
// sudo kill -9 [id]

function App() {
	const [token, setToken] = useState('')

	useEffect(() => {
		const hash = window.location.hash
		let savetoken = window.localStorage.getItem("token")

		if (!token && hash) {
			savetoken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
			window.location.hash = ""
			window.localStorage.setItem("token", savetoken)
		} 
		
		setToken(savetoken)

	}, [token])
	
	return (
		<div className="App">
			{ !token ? <LoginPage /> : <Home setToken={setToken} /> }
		</div>
	);
}

export default App;
