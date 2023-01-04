import React, { useState } from "react";

function Form(props) {
    const [form, setForm] = useState({firstname: '', lastName: ''})

  const handleChange = (e) => {
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        name=""
        value=""
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;