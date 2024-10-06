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

  const icoError = <svg className="icons" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none"
    fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12" /><rect
      fill="#FFF" x="11" y="6" width="2" height="9" rx="1" /><rect fill="#FFF" x="11"
        y="17" width="2" height="2" rx="1" /></g></svg>

  return (
    <>
      <div className="container">
        <div className="box">
          <p><span>Try it free 7 days</span>  then $20/mo. thereafter</p>
        </div>
        <form className="form" onSubmit={handleSubmit} >
          <div className="input-group">
            <div className="inpt-group-icon">
              <input
                className={`${(error.firstName && !formData.firstName) && 'inptError'} `}
                value={formData.firstName} onChange={inputHandleChange}
                name="firstName"
                type="text" placeholder="First Name" />
              {(error.firstName && !formData.firstName) && icoError}
            </div>
            {!formData.firstName && <span className="error">
              {error.firstName}</span>}
          </div>
          <div className="input-group">
            <div className="inpt-group-icon">
              <input
                className={`${(error.lastName && !formData.lastName) && 'inptError'} `}
                value={formData.lastName} onChange={inputHandleChange}
                name="lastName"
                type="text" placeholder="Last Name " />
              {(error.lastName && !formData.lastName) && icoError}
            </div>
            {!formData.lastName && <span className="error">
              {error.lastName}</span>}
          </div>
          <div className="input-group">
            <div className="inpt-group-icon">
              <input
                className={`${(error.email && !formData.email) && 'inptError'} `}
                value={formData.email} onChange={inputHandleChange}
                name="email"
                type="email"
                placeholder={`${(error.firstName && !formData.firstName) ? 'email@example/com' : "Email Address"} `} />
              {(error.email && !formData.email) && icoError}
            </div>
            {!formData.email &&
              <span className="error"> {error.email} </span> ||
              <span className="error"> {error.Invalid} </span>}
          </div>
          <div className="input-group">
            <div className="inpt-group-icon">
              <input
                className={`${(error.password && !formData.password) && 'inptError'} `}
                value={formData.password} onChange={inputHandleChange}
                name="password"
                type="password" placeholder="Password" />
              {(error.password && !formData.password) && icoError}
            </div>
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