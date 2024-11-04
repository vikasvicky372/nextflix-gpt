import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


//logic to fetch bow playing movies and update the store
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
      const json = await data.json();
      //console.log(json.results);
      dispatch(addNowPlayingMovies(json?.results));
    }
   
    useEffect(() => {
     fetchNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies