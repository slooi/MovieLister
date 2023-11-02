import React, {useState, useEffect} from "react";

import './App.css'
import Icon from "./icon.svg"
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com/?apikey=115f4e51'
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=115f4e51'


const movie1 = {
	"Title": "Italian Spiderman",
	"Year": "2007",
	"imdbID": "tt2705436",
	"Type": "movie  asd asd asd asd as askd ahsdkj sadkjasd kahsd kjahdlkotiuyef ehlfiusy fiuoehfi dasssssssssssssssssssssssssssssssssssssssssssssssssssssss",
	"Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}


const App = () => {
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	
	const seachMovie = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()

		console.log(data)
		setMovies(data.Search)
	}
	useEffect(()=>{
		seachMovie("spiderman")
	},[])

	return (
		<div className="app">
			<header>
				<h3>Movie Lister</h3>
				<div className="navbar">
					<div className="navbar-items">Contact Us</div>
					<div className="navbar-items">Login</div>
				</div>
			</header>
			<div className="search">
				<input placeholder="Search for movies" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
				<img
					src={Icon}
					alt="search"
					onClick={()=>{seachMovie(searchTerm)}}
				/>
			</div>
			<div className="container">
				{
					movies?.length > 0 ?(
						// {movies}
						// <MovieCard movie={movie1}/>
						<>
							{movies.map(movie=><MovieCard movie={movie}/>)}
						</>
					):(
						<h3>No movies found</h3>
					)
				}
			</div>
		</div>
	)
}

export default App