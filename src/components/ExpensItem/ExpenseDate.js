import React from 'react'
import { styled } from 'styled-components'

function ExpenseDate(props) {

  const month = props.date.toLocaleString('en-US', {month : 'long'});
  const day = props.date.toLocaleString('en-US', {day : '2-digit'});
  const year = props.date.toLocaleString('en-US', {year : 'numeric'});


  return (
   <Dates>
        <Month>{month}</Month>
        <Year>{year}</Year>
        <Date>{day}</Date>
    </Dates>

  )
}

export default ExpenseDate


// style

const Dates = styled.div`

text-align: center;
background: #282c34;
padding: 10px;
padding-right: 25px;
padding-left: 25px;
border-radius: 10px;
border: 1px solid #fff;
min-width: 90px;

`;

const Month = styled.p`

font-size: 18px;
margin: 0;

`;

const Year = styled.p`
font-size: 16px;
margin: 0;
margin-top:5px;

`;

const Date = styled.p`
font-size: 35px;
margin: 0;
margin-top:10px;

`;
