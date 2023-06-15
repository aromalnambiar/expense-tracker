import React from 'react'
import { styled } from 'styled-components';

function ChartBar(props) {

  let barFill = '0%'

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + '%';
  }


  return (
    <Container>

      <FillContainer>
        <Fill style={{height: barFill}}> </Fill>
      </FillContainer>

      <Label>
        {props.label}
      </Label>
    </Container>
  )
}

export default ChartBar

const Container = styled.div`


`;

const FillContainer = styled.div`
  border: 2px solid #EF0107;
  height: 150px;
  border-radius: 20px;
  position: relative;
  max-width: 20px;
  overflow: hidden;
`;

const Fill = styled.div`

background-color: yellow;
border-radius: 20px;
position: absolute;
transition: all 0.3s ease-out;
left: 0;
right: 0;
bottom: 0;

`;

const Label = styled.p``;