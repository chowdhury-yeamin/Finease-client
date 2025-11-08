import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h1>Add Transaction Page</h1>
      <form>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" required />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
