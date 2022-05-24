import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import MovieApi from "../../common/apis/MovieApi"
import { APIKey } from "../../common/apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncDetail = createAsyncThunk("movies/fetchAsyncDetail", async (id) => {
  const response = await MovieApi.get(
    `?apiKey=${APIKey}&i=${id}&Plot=full`
  );
  return response.data;
}
);

const initialState ={
    movies: {},
    shows:{},
    selectedMovieOrShow:{},
  };

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      // addMovies: (state ,{payload}) => {
      //   state.movies = payload
      // },
      removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow={};
      },
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, shows: payload };
      },
      [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, selectedMovieOrShow: payload };
      },
      
    },
  });
  export const { removeSelectedMovieOrShow } = movieSlice.actions
  export const getAllMovies = (state)=> state.movies.movies
  export const getAllShows = (state)=> state.movies.shows
  export const getAllDetail = (state)=> state.movies.selectedMovieOrShow
  
  export default movieSlice.reducer
  