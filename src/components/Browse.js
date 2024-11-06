import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import GptContainer from './GptContainer';
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);
  console.log(showGptSearch);
  
  useNowPlayingMovies();

  return (
    <div className='w-screen'>
      <Header/>
      {showGptSearch? <GptContainer/> : <><MainContainer/> <SecondaryContainer/></>}
        
    </div>
  )
}

export default Browse