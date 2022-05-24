import './App.scss';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import MovieDetail from "./components/MovieDetail/MovieDetail"

// Deploy Link
// https://628bd0dfc48fca0097935127--cheery-paletas-bef5bf.netlify.app/

function App() {
  return (
    <BrowserRouter>
     <Header />
<div className='container'>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:imdbID" element={<MovieDetail />} />
        <Route exact path="*"element={<PageNotFound />} />
      </Routes>
      </div>

    <Footer/>

      </BrowserRouter>
  );
}

export default App;
