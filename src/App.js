import React, { useEffect, useState } from 'react'
import LoginPage from './components/LoginPage/LoginPage'
// import axios from 'axios'
import './components/styles/main.scss'
import './App.css'

// lsof -n -i :3000 | grep LISTEN
// sudo kill -9 [id]

function App() {
	const [token, setToken] = useState('')
	// const [searchKey, setSearchKey] = useState("")
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

	const logout = () => {
		setToken("")
		window.localStorage.removeItem("token")
	}

	// const searchArtists = async(e) => {
	// 	const { data } = await axios.get(`https://api.spotify.com/v1/search` , {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`
	// 		},
	// 		params: {
	// 			q: searchKey,
	// 			type: "show"
	// 		}
	// 	})
	// 	console.log(data, 'DATA')
	// }
	
	return (
		<div className="App">
			{!token ?
				<LoginPage />
			 : 
				<>
				Home
					{/* <form>
						<input onChange={(e)=> setSearchKey(e.target.value)}></input>
						<button type='button' onClick={() => searchArtists()}>Search</button>
					</form>
					*/}
					<button onClick={logout}>Log out</button> 
				</>
			}
		</div>
	);
}

export default App;
