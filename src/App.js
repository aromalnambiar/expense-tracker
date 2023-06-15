import { styled } from 'styled-components';
import './App.css';
import Expense from './components/ExpensItem/Expense';
import NewExpense from './components/NewItem/NewExpense';
import { useState } from 'react';





function App() {

  const [data, setData] = useState([])


 const addingData = (items) => {

    const updateData = [
      ...data,
      items,
    ]
    
    setData(updateData);
  }


  return (
    <Container>
        <NewExpense update={addingData} />
        <Expense item={data}/>
    </Container>
    
  );
}


export default App;

const Container = styled.div`

background-color: #36454f;
min-height: 100vh;
padding: 100px;
padding-top: 20px;
padding-bottom: 50px;


`; 


