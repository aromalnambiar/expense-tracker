import React from 'react'
import { styled } from 'styled-components'

function Card(props) {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default Card

// styling

const Container = styled.div`

background-color: #282c34;
padding: 10px;
border-radius: 20px;
min-height: 100px;

`;