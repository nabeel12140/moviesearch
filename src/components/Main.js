import React from 'react'
import styled from 'styled-components'
import Movielist from './Movielist'
import Search from './Search'

const Main = () => {
  return (
    <Wrapper>

    <Search/>
    <Movielist/>
    </Wrapper>
  )
}
const Wrapper =styled.section`
`
export default Main;
