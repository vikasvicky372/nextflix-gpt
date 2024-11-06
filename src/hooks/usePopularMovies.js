import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


//logic to fetch bow playing movies and update the store
const usePopularMovies = () => {
    const dispatch = useDispatch();

    const fetchPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
      const json = await data.json();
      //console.log(json.results);
      dispatch(addPopularMovies(json?.results));
    }
   
    useEffect(() => {
        fetchPopularMovies();
    }, [])
}

export default usePopularMovies;