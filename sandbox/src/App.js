import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", email: "", comments: ""}
  )

  const handleChange = (event) => setFormData(
    prev => ({
      ...prev,
      [event.target.name]: event.target.value
    })
  )
  console.log(formData)

  return (
    <form>
      <input
        type="text" 
        placeholder="first name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      <h1>{formData.firstName} {formData.lastName}</h1>
    </form>
  );
}

export default App;
