import { useEffect, useState } from "react"

export default function Form() {
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const formError = {
    firstNameError: "First Name cannot be empty",
    lastNameError: "Last Name cannot be empty",
    emailError: "email cannot be empty",
    passwordError: "Password cannot be empty"
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {}
    if (!formData.firstName) {
      newErrors.firstName = formError.firstNameError
    }
    if (!formData.lastName) {
      newErrors.lastName = formError.lastNameError
    }
    if (!formData.email) {
      newErrors.email = formError.emailError
    }
    if (!formData.password) {
      newErrors.password = formError.passwordError
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.Invalid = "looks like this is not an email"
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({})
    }

  }

  const inputHandleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  } 

  return (
    <>
      <div className="container">
        <div className="box">
          <p><span>Try it free 7 days</span>  then $20/mo. thereafter</p>
        </div>
        <form className="form" onSubmit={handleSubmit} >
          <div className="input-group">
            <input
              value={formData.firstName} onChange={inputHandleChange}
              name="firstName"
              type="text" placeholder="First Name" />
            {!formData.firstName && <span className="error">
              {error.firstName}</span>}
          </div>
          <div className="input-group">
            <input
              value={formData.lastName} onChange={inputHandleChange}
              name="lastName"
              type="text" placeholder="Last Name " />
            {!formData.lastName && <span className="error">
              {error.lastName}</span>}
          </div>
          <div className="input-group">
            <input
              value={formData.email} onChange={inputHandleChange}
              name="email"
              type="email" placeholder="Email Address" />
            {!formData.email &&
              <span className="error"> {error.email} </span> ||
              <span className="error"> {error.Invalid} </span>}
          </div>
          <div className="input-group">
            <input
              value={formData.password} onChange={inputHandleChange}
              name="password"
              type="password" placeholder="Password" />
            {!formData.password && <span className="error">
              {error.password}</span>}
          </div>
          <button type="submit" >Claim your free trial </button>
          <p>By clicking the button, you are agreeing to our <a> Terms and Services </a></p>
        </form>
      </div>
    </>
  )
}