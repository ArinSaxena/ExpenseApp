import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.amount || !formData.date || !formData.category) {
      alert("Please fill out all fields!");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("expenses")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("expenses", JSON.stringify(updatedData));

    console.log("Form Submitted:", formData);

    setFormData({
      title: "",
      amount: "",
      date: "",
      category: "",
    });

  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Expense Form</h1>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
