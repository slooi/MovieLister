import React from "react"

const MovieCard = ({movie}) => {
	console.log(movie)
	console.log(movie)
	console.log(movie)
	const {Year,Type,Title,Poster} = movie
	return(
		<div className="movie">
			<img className="movie-image" src={Poster !== "N/A" ? Poster:  "https://via.placeholder.com/400"} alt="movie poster"/>

			<div className="movie-properties">
				<div>{Title}</div>
				<div>{Year}</div>
				<div>{Type}</div>
			</div>
		</div>
	)
}

export default MovieCard