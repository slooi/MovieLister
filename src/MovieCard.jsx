import React from "react"

const MovieCard = ({movie}) => {
	const {Year,Type,Title,Poster} = movie
	return(
		<div className="movie">
			<img className="movie-image" src={Poster !== "N/A" ? Poster:  "https://via.placeholder.com/400"} alt="movie poster"/>

			<div className="movie-properties">
				<h3>{Title}</h3>
				<div className="tag-field">
					<div className="tag">{Year}</div>
					<div className="tag">{Type}</div>
				</div>
			</div>
		</div>
	)
}

export default MovieCard