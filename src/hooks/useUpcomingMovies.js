import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


//logic to fetch bow playing movies and update the store
const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const fetchUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
      const json = await data.json();
      //console.log(json.results);
      dispatch(addUpcomingMovies(json?.results));
    }
   
    useEffect(() => {
        fetchUpcomingMovies();
    }, [])
}

export default useUpcomingMovies