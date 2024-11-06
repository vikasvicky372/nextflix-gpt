import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const SecondaryContainer = () => {
    
    usePopularMovies();
    useTopratedMovies();
    useUpcomingMovies();

    const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store?.movies?.popularMovies);
    const topratedMovies = useSelector(store => store?.movies?.topratedMovies);
    const upComingMovies = useSelector(store => store?.movies?.upComingMovies)
    
  return (
    <div className='  bg-black'>
        <div className='-mt-52 relative z-50'>
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieList title= {"Popular"} movies={popularMovies}/>
        <MovieList title={"Top Rated"} movies={topratedMovies}/>
        <MovieList title={"Up Coming"} movies={upComingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer