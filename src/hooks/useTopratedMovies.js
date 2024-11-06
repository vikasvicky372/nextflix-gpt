import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


//logic to fetch bow playing movies and update the store
const useTopratedMovies = () => {
    const dispatch = useDispatch();

    const fetchTopratedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
      const json = await data.json();
      //console.log(json.results);
      dispatch(addTopratedMovies(json?.results));
    }
   
    useEffect(() => {
        fetchTopratedMovies();
    }, [])
}

export default useTopratedMovies