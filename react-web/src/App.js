import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [transactions,setTransactions] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions));
  }, []);
   
return(
<div>
  {transactions.map((transactions) => {})}
</div>
);
}


export default App;
