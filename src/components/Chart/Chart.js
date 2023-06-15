import React from 'react'
import ChartBar from './ChartBar'
import { styled } from 'styled-components'

function Chart(props) {

  const data = props.dataPoint
  
  const MapValue = data.map((value) => value.value)
  const MaxValue = Math.max(...MapValue)

  const Datapoint = data.map((item) => {
        return <ChartBar value={item.value} maxValue={MaxValue} label={item.label} key={item.label} />
      })

  return (
    <Container>
      {Datapoint}
    </Container>
     
  )
}

export default Chart

const Container = styled.div`

background-color: #728FCE;
border-radius: 20px;
display: flex;
justify-content: space-between;
padding: 30px;
padding-bottom: 10px;

`;