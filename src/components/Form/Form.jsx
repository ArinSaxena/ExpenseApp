import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const editedExpense = JSON.parse(localStorage.getItem("editExpense"));

    if (editedExpense) {
      setFormData(editedExpense);
      setIsEditing(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.date ||
      !formData.category
    ) {
      alert("Please fill out all fields!");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("expenses")) || [];
    if (isEditing) {
      existingData[editIndex] = formData;
      localStorage.setItem("expenses", JSON.stringify(existingData));
      localStorage.removeItem("editExpense"); // Clear the edit data
      alert("Expense updated successfully!");
    } else {
      const updatedData = [...existingData, formData];
      localStorage.setItem("expenses", JSON.stringify(updatedData));

      alert("Expense added successfully!");
    }


    setFormData({
      title: "",
      amount: "",
      date: "",
      category: "",
    });

    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>{isEditing ? "Edit Expense" : "Expense Form"}</h1>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter the Title"
        />

        <label>Enter Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter the amount"
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option> {/* Default empty option */}
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <button type="submit">{isEditing ? "Update Expense" : "submit"}</button>
      </form>
    </div>
  );
};

export default Form;
