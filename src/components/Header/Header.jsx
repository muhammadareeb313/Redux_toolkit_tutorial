import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import user from "../../images/user.png"
import "./Header.scss"
import { useDispatch } from 'react-redux'
import { fetchAsyncShows,fetchAsyncMovies } from '../../features/movies/movieSlice'
const Header = () => {
const [term, setTerm] = useState("")
const dispatch = useDispatch();

const submitHandler =(e)=>{
e.preventDefault();
if(term === "") return alert("Please enter search Term");
else if(term.length < 4) return alert("Please enter four words");

dispatch(fetchAsyncMovies(term));
dispatch(fetchAsyncShows(term));
console.log(term);
setTerm("")
}
  return (
    <div className='header'>
      <div className='logo'>
     <Link to="/">Movie App</Link>
    </div>
    <div className='search_bar'>
      <form onSubmit={submitHandler}>
        <input type="text" value={term} placeholder="Search Movies or Show" onChange={(e)=>setTerm(e.target.value)}/>
    <button type='submit'><i className='fa fa-search'></i></button>
      </form>
    </div> 
      <div className='user_image'>
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;