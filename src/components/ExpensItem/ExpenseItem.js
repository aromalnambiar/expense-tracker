import React from 'react'
import { styled } from 'styled-components'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <Container>

       <Left>

            <ExpenseDate date={props.date}/>
            
            <Subject>
                {props.title}
            </Subject>
        </Left> 
        

        <Amount>
            $ {props.amount}
        </Amount>

    </Container>
  )
}

export default ExpenseItem


const Container = styled.div`

background-color: #36454f;
padding: 15px;
margin: 20px;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;
font-weight: bold;

`;

const Left = styled.div`

display: flex;
align-items: center;

`;


const Subject = styled.p`

margin-left: 30px;
font-size: 35px;

`;

const Amount = styled.p`

background-color: #C71585;
font-size: 25px;
padding: 40px;
padding-top: 20px;
padding-bottom: 20px;
border-radius: 10px;
border: 1px solid #fff;

`;

