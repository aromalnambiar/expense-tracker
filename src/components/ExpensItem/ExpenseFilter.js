import React, { useState } from 'react'
import { styled } from 'styled-components'

function ExpenseFilter(props) {

    const list = [2020, 2021, 2022, 2023, 2024, 2025]

    const [options, setOptions] = useState('2020')

    props.optionChange(options)

  return (
    <Container>
        <FilterHeading>Filter by year</FilterHeading>
        <Select 
        value={options}
        onChange={e => setOptions(e.target.value)}>
           {list.map((item) => {
            return <Option key={item}>{item}</Option>
           })}
           
        </Select>
    </Container>
    
  )
}

export default ExpenseFilter

const Container = styled.div`

display: flex;
justify-content: space-between;
padding-left: 40px;
padding-right: 40px;
align-items: center;

`;

const FilterHeading = styled.h2`
color: #fff;

`;

const Select = styled.select`

min-width: 150px;
min-height: 50px;
border: none;
border-radius: 5px;
font-size: 25px;
text-align: center;
font-weight: bold;
padding-top: 7px;

`;

const Option = styled.option`



`;