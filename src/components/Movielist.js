import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {useProductContext } from './context/apiconteact'

const Movielist = () => {
  const {api_data,isError}=useProductContext();
  console.log("abca",api_data)
  return (
    <Wrapper className='bg-light'>
      {/* <p className='small'>{isError ? "Movie not found": "go down"}</p> */}
      <div className='container'>
        <p>
          Watch FULL HD Quality 1080/720p movies and latest Web series online for free.
          There is no denying that serials, drama series, and movies have been an incredible source of fun,
          excitement, and adventure. It's a known fact that most people want to download movies as free downloads 
          from all the available sites and online platforms. 5movies, 5 movies, 5movies.to, 5movie, movies25, 
          5movies.to/latest-hd/, movie25 tinklepad, free movies 25, movie25 cm, 5movies.com, movie25 latest hd, 
          movie25 io, tinklepad movies, movie25 net, watch 5 movies, 5movies movies. 5Moviess, Crime Movies, Family
          Movies, Horror Movies, Thriller Movies, Romantic Movies. All you have to do is to search the highly popular 
          and the famous movies that are watched by the thousands of the movie lovers and the adventure seeking.
        </p>
        <h2>Trending</h2>
        <button className='btn btn-primary'>Movies</button>
        <button className='btn btn-primary'>Watch Movies</button>
        <div className='row'>
         
          
        {
          api_data.map((movie)=>
          {
            return(
              <div class=" col-10 col-md-4  mt-5">
                <NavLink to={`/single/${movie.imdbID}`} key={movie.imdbID}>
              <div class="card" >
              <div class="card-body">
              <h5 class="card-title text-center">{movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{movie.Year}</h6>
              <figure>
              <img src={movie.Poster}/>
              </figure>
              </div>
              </div>
              </NavLink>
              </div>
            )
          })
        }
          
          </div>
      </div>
      
    </Wrapper>
  )
}
const Wrapper =styled.section`
.card-body
{
  margin-top:5rem;
}
.container
{
  padding-top:5rem;
}
.small{
  padding-top:5rem;
  text-align:center;
  color:red;
  font-size:1.5rem;
}
p
{
  font-size:1.3rem;
  padding-bottom:2rem;
}
button{
  padding:0.8rem;
  margin-left:0.5rem;
}
.card {
  height:30rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  
  img {
    transition: all 0.2s linear;
    border-radius:2rem;
  }
}
.card:hover
{
  transform: scale(1.1);
  border-radius:1rem;
}
`
export default Movielist