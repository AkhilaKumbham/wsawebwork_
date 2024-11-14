import React from 'react'
import MovieItem1 from './MovieItem1';

const Movielistt = () => {
    const movies=[
    {name:"RRR", rating:4},
    {name:"KGF",rating:5},
    {name:"Pushpa",rating:4},
    {name:"mnop",rating:2},

    ];
  return (
    <>
    <h2>Movie Lists:</h2>
    <ul>
     {movies.map((movie,index)=>(<MovieItem1 key={index} movie={movie}/>))}
      
    </ul>
    </>
  )
}

export default Movielistt