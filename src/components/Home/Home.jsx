import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineSparkles, HiOutlineHome } from 'react-icons/hi'
import defaultProfileAvatar from '../assets/defaultProfileAvatar.png' 
import './home.scss'

const Home = ({ setToken }) => {
	// const [searchKey, setSearchKey] = useState("")

	const logout = () => {
		window.localStorage.removeItem("token")
		setToken('')
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
	<section className='home'>
		<div className='search'>
			<input 
				className='input-search' 
				placeholder='Search an episode or show' 
			/>
			<BiSearch/>
		</div>
		<h2> Your shows </h2>

		{/* add bounce for webapp height */}
		<div className='nav-bottom'>
			<HiOutlineSparkles/>
			<HiOutlineHome/>
			<button>
				<img src={defaultProfileAvatar} alt='profile icon'/>
			</button>
		</div>
		{/* <button onClick={logout}> Log out </button> */}
	</section>
  )
}

export default Home