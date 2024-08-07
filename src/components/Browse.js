import Header from './Header'
import useNowPlayingMoves from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Fetch Data from TNDB API and update store
  useNowPlayingMoves();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header state={true} />
      {
        showGptSearch 
        ? <GptSearch /> 
        : <> <MainContainer />
          <SecondaryContainer /></>
      }
    </div>
  )
}

export default Browse