import React, { useEffect } from 'react'
import "./MovieDetail.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDetail, getAllDetail ,removeSelectedMovieOrShow} from '../../features/movies/movieSlice';
const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllDetail)
useEffect(() => {
  dispatch(fetchAsyncDetail(imdbID))
return ()=>{
  dispatch(removeSelectedMovieOrShow());
}
 
}, [dispatch])

  return (
    <div className='movie_section'>
      {Object.keys(data).length === 0 ? 
    (<div>...Loading</div>):(
<>
      <div className='section_left'>
        <div className='movie_title'>
         {data.Title}
        </div>
        <div className='movie_rating'>
        <span>IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}</span>
        <span>IMDB Votes <i className='fa fa-thumbs-up'></i> : {data.Votes}</span>
        <span>IMDB Runtime <i className='fa fa-film'></i> : {data.Runtime}</span>
        <span>IMDB Year <i className='fa fa-calendar'></i> : {data.Year}</span>

        </div>
        <div className='movie_plot'>

        </div>
        <div className='movie_info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
         </div> 
         <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
         </div>
         <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
         </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
         </div> 
         <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
         </div> 
        </div>
      </div>
      <div className='section_right'>
       <img src={data.Poster} alt={data.Title}/>
      </div>
      </>
    )
    }

     
    </div>
  )
}

export default MovieDetail