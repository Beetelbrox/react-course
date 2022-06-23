import React from "react";
import './App.css';

function App() {

  const [formData, setFormData] = React.useState(
    {email: "", password: "", confirmPassword: "", joinNewsletter: true}
  )

  const handleChange = event => setFormData(
    prev => {
      const {name, value, type, checked} = event.target
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    }
  )


  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up")
      if(formData.joinNewsletter){
        console.log("Thanks for signing up for our newsletter!")
      }
    } else {
      console.log("passwords do not match")
    }
  }


  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form__input"
          />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="form__input"
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form__input"
        />
        <div className="checkbox">
          <input
            type="checkbox"
            name="joinNewsletter"
            checked={formData.joinNewsletter}
            onChange={handleChange}
          />
          <label htmlFor="wantToJoinNewsletter">I want to join the newsletter</label>
        </div>
        <button className='form__submit'>Sign up</button>

      </form>

    </div>
  );
}

export default App;
