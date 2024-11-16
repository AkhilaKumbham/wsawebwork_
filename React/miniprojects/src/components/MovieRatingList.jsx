import React, { useState } from 'react'
import MovieForm from './MovieForm'
import AverageRating from './AverageRating'
import Movielistt from './Movielistt'

const MovieRatingList = () => {

  const [movies,setMovies]=useState([]);
  const addMovie=(movie)=>{
    setMovies([...movies,movie]);
  }
  //delete movie
  const handleDelMovie=(postion)=>{
    const newMovies =movies.filter((_,i)=>i !== postion);
    setMovies(newMovies)
  };


  //calculate average rating
  const calculatEAvgRating=()=>{
    if(movies.length===0) return 0;
    const totalRating=movies.reduce(sum,movie)=> {sum + movie.rating;
     return (totalRating/movies.length).toFixed();}
  }


  return (
    <> 
    <h1>Movie Rating App</h1>
    <MovieForm />
    <Movielistt />
    <AverageRating />
    </>
  )
}

export default MovieRatingList