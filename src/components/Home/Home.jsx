import React from 'react'
import MovieListing from "../MovieListing/MovieListing"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows,removeSelectedMovieOrShow
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const movieText ="Superman";
  const showText ="Batman";

useEffect(() => {
  dispatch(fetchAsyncMovies(movieText));
  dispatch(fetchAsyncShows(showText));
  return ()=>{
    dispatch(removeSelectedMovieOrShow());
  }
},[dispatch]);


  return (
    <div className='banner_img'>
 <MovieListing />
    </div>
  )
}

export default Home