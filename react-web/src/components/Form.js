import React from 'react'
import { useState } from 'react';
import "../App.css";

function Form() {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {date, description, category, amount}
    fetch('https://my-json-server.typicode.com/James-Kamau3/react-code-challenge1/transactions',{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(transaction),
    }).then(console.log(transaction))
  }
 

  const handleDelete = (e) => {
    e.preventDefault();
    fetch("https://my-json-server.typicode.com/James-Kamau3/react-code-challenge1/transactions",{
      method: "DELETE",
    }).then(console.log("Deleted"))
  }

  return (
    <div className='Form'>
    <form>
      <label>Date</label><br></br>
      <input type="date"  value={date} 
      onChange={(e) => setDate(e.target.value)}/><br></br>
    <label >Description:</label><br></br>
    <input type="text" value={description}
    onChange={(e) => setDescription(e.target.value)}/><br></br>
    <label >Category:</label><br></br>
    <input type="text" value={category}
    onChange={(e) => setCategory(e.target.value)}/><br></br>
    <label >Amount:</label><br></br>
    <input type="number" value={amount}
    onChange={(e) => setAmount(e.target.value)}/><br></br>
    <button onClick={handleSubmit}>Add Transaction</button>
    <button onClick={handleDelete} >Remove Added Transaction</button>
        
    </form>
    </div>
  );
}

export default Form;



