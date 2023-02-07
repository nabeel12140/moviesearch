import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProductContext } from './context/apiconteact';

const Single = () => {
  const API = `https://www.omdbapi.com/?apikey=f1e1c9d5`;
  const {getMovies,single}=useProductContext();
  const {imdbID}=useParams();
  console.log("single",single)
  const {Poster,Title,Year,Language,Actors,Plot,Genre,Runtime}=single;
  useEffect(()=>{
    getMovies(`${API}&i=${imdbID}`)
  },[imdbID])
  return (
    <Wrapper className="bg-light">
      <div class=" col-10 col-md-4">
      <div class="card">
      <img src={Poster} class="card-img-top" alt="Movie Poster"/>
      <div class="card-body">
      <h5 class="card-title">{Title}</h5>
      <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">{Language}</h6>
      <small class="badge bg-primary rounded-pill">Year:{Year}</small>
    </div>
      <p class="card-text">Actors:  {Actors}</p>  
      <li class="list-group-item list-group-item-dark">{Runtime}  {Genre}</li> 
      <a href="#" class="margin list-group-item list-group-item-action list-group-item-danger">
        {Plot}</a>   
      <a href="#" class="margin btn btn-primary">Learn More</a>
      </div>
      </div>

      
      </div>

</Wrapper>

  )
}
const Wrapper=styled.section`
font-size:1.1rem;
height:60rem;
a{
  padding:1rem;
}
.margin{
margin-top:1rem;
}
.card
{
  width:35%;
  display:flex;
  position:absolute;
  top:10%;
  border-radius:1rem;
  left:35%;
}
ul li
{
  text-decoration:none;
}
.card {
  
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
  }
}
.card:hover
{
  transform: scale(1.1);
  
}
.card-img-top
{
  height:30rem;
  padding:2rem;
  width:70%
}
`
;
export default Single;