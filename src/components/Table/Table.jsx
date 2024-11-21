import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
const Table = () => {
  const [expense, setExpense] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpense(storedData);
  }, []);

  const removeItem = (index) => {
    const updatedExpenses = [...expense];
    updatedExpenses.splice(index, 1);
    setExpense(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const removeAllItems = () => {
    setExpense([]);
    localStorage.removeItem("expenses");
  };

  const editItem = (index) => {
    localStorage.setItem("editExpense", JSON.stringify(expense[index]));

    navigate("/");
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th style={{ width: "50px" }}>DELETE</th>
            <th style={{ width: "50px" }}>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {expense.length === 0 ? (
            <tr>
              <td colSpan="6">No expenses.</td>
            </tr>
          ) : (
            expense.map((expense, index) => (
              <tr key={index}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td className={{ width: "50px" }}>
                  <button className="dlt-btn" onClick={() => removeItem(index)}>
                    Delete
                  </button>
                </td>
                <td className={{ width: "50px" }}>
                  <button className="edit-btn" onClick={() => editItem(index)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
