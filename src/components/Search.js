import React from 'react'
import styled from 'styled-components'
import { useProductContext } from './context/apiconteact'
const Search = () => {
    const {setquery,query}=useProductContext();
  return (
    <Wrapper>
        <div className='patrent'>
    <div className='containers'>
        <div className='heading'>
            <h1>Search About Movie-List, Tv shows</h1>
        </div>
    </div>
    <div class="input">
    <input type="text" class="form-control" placeholder="Search"
    value={query}
    onChange={(e)=>setquery(e.target.value)
    }/>
  </div>
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
patrent{
    position:relative;
}
    .containers{
        height:20rem;
        color:white;
        align-items: center;
        display:flex;
        justify-content: center;
    }
    .heading
    {
        font-family: Arial, Helvetica, sans-serif;
    }
    .form-control
    {
        height:6rem;
        background-color:white;
        border-radius:2rem;
        font-size:2rem;
    }
    .input
    {
        position :absolute;
        width:60%;
        top: 35%;
        left:22%;
    }
    
`
export default Search