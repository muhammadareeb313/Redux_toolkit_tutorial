import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies,getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { settings } from "../../common/settings";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  
  console.log(movies);
  let renderMovies = "", renderShows="";
  renderMovies = movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3 className="shows_error">{movies.Error}</h3>
      </div>
    );

    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => (
        <MovieCard key={index} data={shows} />
      ))
    ) : (
      <div >
        <h3 className="shows_error">{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie_wrapper">
      <div className="movie_list">
        <h2>Movies</h2>
        <div className="movie_container">
          <Slider {...settings}>{renderMovies}</Slider></div>
      </div>
      <div className="show_list">
        <h2>Shows</h2>
        <div className="movie_container">
        <Slider {...settings}>{renderShows}</Slider></div>
          

      </div>
    </div>
  );
};

export default MovieListing;
