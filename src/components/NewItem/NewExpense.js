import React from 'react'
import { styled} from 'styled-components'
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {

    const ExpenseFormData = (ExpenseItems) => {

        const ExpenseData = {
            ...ExpenseItems,
            id: Math.random(),
        }

        

        props.update(ExpenseData)

    }

  return (
    <Container>

        <ExpenseForm onSaveData={ExpenseFormData} />

    </Container>
  )
}

export default NewExpense

const Container = styled.div`



`;