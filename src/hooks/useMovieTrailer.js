import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerId } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => { 
    
    const dispatch = useDispatch();

    const fetchmovieVideos= async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?', options);
        const json = await data.json();
        //console.log(json.results);
        const filteredMovies = json.results.filter(movie => movie.type === "Trailer");
        const movieTrailer = filteredMovies ? filteredMovies[0]:json?.results?.[0];
        //console.log(movieTrailer);
        dispatch(addTrailerId(movieTrailer));
    }
    
    useEffect(()=> {
        fetchmovieVideos();
    }, [])
};

export default useMovieTrailer;
