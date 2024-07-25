import Header from './Header'
import useNowPlayingMoves from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';

const Browse = () => {

  // Fetch Data from TNDB API and update store
  useNowPlayingMoves();
  usePopularMovies();

  return (
    <div>
      <Header state = {true}/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse