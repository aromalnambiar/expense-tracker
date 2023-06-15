import React,{useState} from 'react'
import styled from'styled-components'

function ExpenseForm(props) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState(new window.Date())
    const [formModal, setFormModal] = useState(false)

    const TitleHandler = (event) => {
            setTitle(event.target.value)
        }

    const AmountHandler = (event) => {
            setAmount(event.target.value)
        }

    const DateHandler = (event) => {
            setDate(event.target.value)
        }

    const CancleHandler = (event) => {
        setFormModal(!formModal)
    }

    const SubmitHandler = (event) => {
        event.preventDefault()
        console.log(title, amount, date)

        const ExpenseData = {
            title: title, 
            amount: amount ,
            date: new window.Date(date),
        }

        props.onSaveData(ExpenseData)

        setTitle('')
        setAmount('')
        setDate(new window.Date())
    }


  return (
    <Container onSubmit={SubmitHandler}>
        
        {formModal
        ?
        <>
        <Title name="title" type="text" placeholder='Enter the Expense Item' required value={title} onChange={TitleHandler}/>
        <Amount name="amount" type="number" placeholder='Enter the Expense Amount' required value={amount} onChange={AmountHandler}/>
        <Date name="date" type="date" placeholder='Enter the Date' required value={date} onChange={DateHandler}/>
        <ButtonContainer>
                <Cancle onClick={CancleHandler} >Cancle</Cancle>
                <Submit type="submit" value="submit" />
        </ButtonContainer>
        </>
       :
       <AddExpense onClick={CancleHandler}>AddExpense</AddExpense>
       }

    </Container>
  )
}

export default ExpenseForm

// style

const Container = styled.form`

background-color: #728FCE;
padding: 20px;
display : flex;
flex-direction: column;
border-radius: 20px;
margin: 20px;
margin-top: 0px;
justify-content: space-around;
align-items: center;

`;

const Title = styled.input`

padding: 20px;
padding-left: 40px;
padding-right: 40px;
border-radius: 5px;
border: none;
margin: 20px;

`;

const Amount = styled.input`

padding: 20px;
padding-left: 40px;
padding-right: 40px;
border-radius: 5px;
border: none;
margin: 20px;


`;

const Date = styled.input`

padding: 20px;
padding-left: 40px;
padding-right: 40px;
border-radius: 5px;
border: none;
margin: 20px;


`;

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`;

const Submit = styled.input`
margin: 20px;
background-color: yellow;
font-size: 25px;
padding: 50px;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 10px;
margin-top: 30px;
border: 1px solid #000;
color: #000;
font-weight: bold;

&:hover {
    cursor: pointer;
}

`

const Cancle = styled.button`
margin: 20px;
background-color: yellow;
font-size: 25px;
padding: 50px;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 10px;
margin-top: 30px;
border: 1px solid #000;
color: #000;
font-weight: bold;

&:hover {
    cursor: pointer;
}

`;


const AddExpense = styled.button`

background-color: yellow;
font-size: 25px;
padding: 50px;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 10px;
border: 1px solid #000;
color: #000;
font-weight: bold;

&:hover {
    cursor: pointer;
}

`;