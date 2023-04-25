import React from 'react'

function Transactions() {
    const [transactions,setTransactions] = useState([]);

    // Add useEffect hook
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then((json) => setTransactions(json));
    }, []); 

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Transactions