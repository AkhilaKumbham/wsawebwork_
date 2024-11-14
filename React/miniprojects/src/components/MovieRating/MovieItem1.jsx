import React from 'react'

const MovieItem1 = ({movie}) => {
    const renderStar=(inc)=>{
        return Array.from({length:5},(_, i)=>(
        <span key={i} style={{color:i<inc?"green":"grey"}}>
         &#9733;
        </span>
    ));
    };
  return (
    <>
    <li>{movie.name}  - {renderStar(movie.rating)}
        <button style={{marginLeft:"10px"}}>Delete</button>

    </li>
    
    </>
  )
}

export default MovieItem1