import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MoviePopular from './Component/Movies/MoviePopular/MoviePopular';
import MovieRated from './Component/Movies/MovieRated/MovieRated';
import TvShowPopular from './Component/TvShows/TvShowPopular/TvShowPopular';
import TvShowRated from './Component/TvShows/TvShowRated/TvShowRated';
import Navigation from './Component/Navigation/Navigation';



function App() {


  return (
    <div>

      <BrowserRouter>
      <Navigation/>
      <Routes>


      <Route path='/movie-popular' element={<MoviePopular/>}/>
      <Route path='/movie-rated' element={<MovieRated/>}/>
      <Route path='/tvshow-popular' element={<TvShowPopular/>}/>
      <Route path='/tvshow-rated' element={<TvShowRated/>}/>
      
      <Route path='/'  element={<MoviePopular/>}/>
      
      
      
      
      </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
