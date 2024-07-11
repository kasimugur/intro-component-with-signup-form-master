import { useEffect, useState } from "react"

export default function Form() {
  const [control, setControl] = useState(false);
  const [value, setValue] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
const handleSubmit = (event) => {
  event.preventDefault();
  if (!firstName ||!lastName ||!email ||!password) {
    setError('Please fill in all fields');
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    setError('Invalid email address');
  }
}


  return (
    <>
      <div className="container">
        <div className="box">
          <p><span>Try it free 7 days</span>  then $20/mo. thereafter</p>
        </div>
        {/* <div> */}
        <form className="form" onSubmit={handleSubmit} >
          <div className="input-group">
            <input
            value={firstName} onChange={e => setFirstName(e.target.value)}
            type="text" placeholder="First Name"/>
            {!firstName  && <span className="error">First Name cannot be empty</span>}
          </div>
          <div className="input-group">
            <input
            value={lastName} onChange={e => setLastName(e.target.value)}
            type="text" placeholder="Last Name "/> 
            {!lastName && <span className="error">Last Name cannot be empty</span>}
          </div>
          <div className="input-group">
            <input
             value={email} onChange={e => setEmail(e.target.value)}
              type="email" placeholder="Email Address"/>
              {!email && <span className="error">Email cannot be empty</span>}
              { error === "Invalid email address" && <span className="error">{error} </span>}
          </div>
          <div className="input-group">
            <input
            value={password} onChange={e => setPassword(e.target.value)}
            type="password" placeholder="Password" />
            {!password && <span className="error">Password cannot be empty</span>}
          </div>
            <button  type="submit" >Claim your free trial </button>
          <p>By clicking the button, you are agreeing to our <a> Terms and Services </a></p>
        </form>
        {/* </div> */}
      </div>
    </>
  )
}