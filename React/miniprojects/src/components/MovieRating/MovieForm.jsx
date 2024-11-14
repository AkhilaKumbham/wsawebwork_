import React from 'react'

const MovieForm = (addMovie) => {
  return (
    <>
    <input type="text" placeholder="enter the movie name"/>
    <select value="rating" onChange={(e)=>setRating(e.target.value)}>
       <option value="0">Select Rating</option>
       <op
    </select>
    <button>Add Movies</button>
    </>
  )
}

export default MovieForm