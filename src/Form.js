import React, { useState } from "react";

function Form(props) {
    const [form, setForm] = useState({firstName: ''})
  const handleChange = (e) => {
    const {name, value} = e.target
    setForm(prevState =>{
      return{
        ...prevState,
        [name]:value
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addList(form.firstName)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;