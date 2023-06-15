import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import { styled } from 'styled-components';
import ExpenseChart from './ExpenseChart';

function Expense(props) {

    const [changingYear,  setChangingYear] = useState('')

    const handleChangingYear = (dates) => {
        setChangingYear(dates)
    }   
  
    const FilterTheListofExpense =  props.item.filter((items) => {
      return JSON.stringify(items.date.getFullYear()) === changingYear
    })

    console.log(FilterTheListofExpense);

    const listOfExpenses = FilterTheListofExpense.length === 0 
    ?
    <NoExpense>Found No Expense</NoExpense>
    :
    FilterTheListofExpense.map((item, index) => {
      console.log(item.id);
        return(
            <ExpenseItem 
           title = {item.title}    
           amount = {item.amount}   
           date = {item.date}
           key = {index}           
           />
        )

    } )

  return (

    <Card>
        <ExpenseChart expenses={FilterTheListofExpense}/>
        <ExpenseFilter optionChange={handleChangingYear}/>
        {listOfExpenses}
    </Card>
  )
}

export default Expense


const NoExpense = styled.h1`

color: yellow;
font-size: 30px;
padding: 50px;
font-weight: bold;
text-align: center;

`
