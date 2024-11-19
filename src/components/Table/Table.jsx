import { useState, useEffect } from "react";
import "./Table.css"
const Table = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpense(storedData);
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
            {expense.length === 0 ? (
                <tr>
                    <td colSpan="4">No expenses.</td>
                </tr>
            ):
            expense.map((expense,index) =>(
                <tr key={index}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                </tr>
                
                
            ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
