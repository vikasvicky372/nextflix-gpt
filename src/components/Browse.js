import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'


const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
        <MainContainer/>
        {/* <p>Secondary Container</p> */}
    </div>
  )
}

export default Browse